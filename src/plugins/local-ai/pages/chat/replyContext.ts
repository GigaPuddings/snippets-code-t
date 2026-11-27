import { marked, type Tokens } from 'marked';
import type { LocalAiMessage } from '@/api/localAi';
import type { ChatMessage } from './types';
import {
  apiUserMessageContent,
  createRuntimeContextMessage,
  estimateChatTokens,
  resolveRequestContextBudget
} from './chatContext';
import { splitReasoning } from './useChatMarkdown';

type Turn = {
  question: ChatMessage;
  user: LocalAiMessage;
  answer: LocalAiMessage;
};
type Options = {
  windowSize: number;
  outputLimit: number;
  constraintsLabel: string;
  countTokens?: (messages: LocalAiMessage[]) => Promise<number | null>;
};
export interface ReplyPlan {
  messages: LocalAiMessage[];
  promptTokens: number;
  compacted: boolean;
  outputLimit: number;
  windowSize: number;
}

function getTurns(path: ChatMessage[]): Turn[] {
  const turns: Turn[] = [];
  let question: ChatMessage | undefined;
  for (const message of path) {
    if (message.role === 'user') question = message;
    if (message.role !== 'assistant' || !question) continue;
    const answer = splitReasoning(message.content).answer;
    if (answer && !message.error && !message.streaming) {
      turns.push({
        question,
        user: { role: 'user', content: apiUserMessageContent(question) },
        answer: { role: 'assistant', content: answer }
      });
    }
    question = undefined;
  }
  return turns;
}

const questionId =
  /^(?:#{1,6}\s+)?(?:[-*]\s+|\d+[.)、]\s*)?(?:\*\*)?(?:Q\s*(\d+)|第\s*(\d+)\s*题)(?!\d)/i;
function normalizeQuestionNumbers(text: string): string {
  return text.replace(
    /第\s*([一二三四五六七八九]?十[一二三四五六七八九]?|[一二三四五六七八九])\s*题/g,
    (_, numeral: string) => {
      const digits = '零一二三四五六七八九';
      const [tens, units] = numeral.split('十');
      const n =
        units === undefined
          ? digits.indexOf(tens)
          : (tens ? digits.indexOf(tens) : 1) * 10 +
            (units ? digits.indexOf(units) : 0);
      return '第' + n + '题';
    }
  );
}
const isContinuation = (message: ChatMessage) =>
  Boolean(message.continuationMode) ||
  /^(?:请)?(?:继续|接着写|续写|continue|go on)\s*[。.!！]?$/i.test(
    message.content.trim()
  );

// Use Markdown block boundaries so a mention inside a code fence does not
// accidentally become the start of a section.
function findPassages(
  answer: string,
  query: string,
  references: Set<string>,
  matchedHeadings: Set<string>
): string[] {
  const blocks = marked.lexer(answer).flatMap<{
    raw: string;
    type: string;
    heading?: string;
    depth?: number;
  }>((block) => {
    if (block.type === 'list')
      return block.items.map((item: Tokens.ListItem) => ({
        raw: item.raw,
        type: 'list_item'
      }));
    if (block.type === 'paragraph')
      return block.raw
        .split(
          /\n(?=(?:\*\*)?(?:Q\s*\d+|第\s*[\d一二三四五六七八九十]+\s*题))/i
        )
        .map((raw) => ({ raw, type: 'paragraph' }));
    return [
      {
        raw: block.raw,
        type: block.type,
        heading: block.type === 'heading' ? block.text : undefined,
        depth: block.type === 'heading' ? block.depth : undefined
      }
    ];
  });
  const passages: string[] = [];
  let selected = false;
  let depth = 7;
  for (const block of blocks) {
    const first = block.raw.trimStart().split('\n', 1)[0];
    const id =
      block.type === 'code'
        ? null
        : normalizeQuestionNumbers(first).match(questionId);
    const level = block.depth ?? 7;
    if (id || (block.type === 'heading' && level <= depth)) selected = false;
    const heading = block.heading?.trim() ?? '';
    const named =
      !id &&
      heading.length >= 2 &&
      query.includes(heading) &&
      !matchedHeadings.has(heading);
    const matches = [...references].filter((ref) =>
      ref.startsWith('q:')
        ? id && (id[1] ?? id[2]) === ref.slice(2)
        : block.raw.includes(ref.slice(2))
    );
    if (named || matches.length) {
      if (named) matchedHeadings.add(heading);
      for (const ref of matches) references.delete(ref);
      if (id || block.type === 'heading') {
        selected = true;
        depth = level;
      } else if (!selected) {
        passages.push(block.raw);
      }
    }
    if (selected) passages.push(block.raw);
  }
  return passages;
}

function answerTail(answer: string, budget: number): string {
  if (estimateChatTokens([{ role: 'assistant', content: answer }]) <= budget)
    return answer;
  const blocks = marked.lexer(answer).filter((block) => block.type !== 'space');
  const tail: string[] = [];
  let cost = 0;
  for (const block of blocks.reverse()) {
    const size = estimateChatTokens([
      { role: 'assistant', content: block.raw }
    ]);
    if (cost + size > budget) {
      if (!tail.length) {
        // A single paragraph or code fence can itself exceed the window.
        const text = block.type === 'code' ? block.text : block.raw;
        const chars = Array.from(text.trimEnd());
        let low = 0;
        let high = chars.length;
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (
            estimateChatTokens([
              { role: 'assistant', content: chars.slice(mid).join('') }
            ]) >
            budget - 24
          )
            low = mid + 1;
          else high = mid;
        }
        let excerpt = chars.slice(low).join('');
        const endOfLine = excerpt.indexOf('\n');
        if (low && endOfLine >= 0 && endOfLine < excerpt.length / 2)
          excerpt = excerpt.slice(endOfLine + 1);
        if (block.type === 'code') {
          let fenceLength = 3;
          for (const run of excerpt.matchAll(/^`+/gm))
            fenceLength = Math.max(fenceLength, run[0].length + 1);
          const fence = '`'.repeat(fenceLength);
          excerpt = fence + (block.lang ?? '') + '\n' + excerpt + '\n' + fence;
        }
        tail.unshift('[…]\n\n' + excerpt);
      }
      break;
    }
    cost += size;
    tail.unshift(block.raw);
  }
  return tail.join('\n\n').trim();
}

export async function planReplyContext(
  path: ChatMessage[],
  question: ChatMessage,
  options: Options
): Promise<ReplyPlan | null> {
  // A reasoning model can hit its limit before producing any visible answer.
  // In that case retry the unanswered question, including its attachments.
  while (isContinuation(question) && path.length >= 2) {
    const reply = path[path.length - 1];
    const pending = path[path.length - 2];
    if (
      reply.role !== 'assistant' ||
      pending.role !== 'user' ||
      splitReasoning(reply.content).answer.trim()
    )
      break;
    question = pending;
    path = path.slice(0, -2);
  }
  const { windowSize, outputLimit } = options;
  const budget = resolveRequestContextBudget(windowSize, outputLimit);
  const system = createRuntimeContextMessage();
  const latest: LocalAiMessage = {
    role: 'user',
    content: apiUserMessageContent(question)
  };
  const turns = getTurns(path);
  const full = [system, ...turns.flatMap((t) => [t.user, t.answer]), latest];
  let counter = options.countTokens;
  async function measure(messages: LocalAiMessage[]) {
    const estimate = estimateChatTokens(messages);
    if (
      counter &&
      estimate >= budget * 0.75 &&
      messages.every((m) => typeof m.content === 'string')
    ) {
      const count = await counter(messages);
      if (count !== null) return count;
      counter = undefined;
    }
    return estimate;
  }
  const plan = (
    messages: LocalAiMessage[],
    promptTokens: number,
    compacted: boolean
  ): ReplyPlan => ({
    messages,
    promptTokens,
    compacted,
    windowSize,
    outputLimit
  });
  const fullCost = await measure(full);
  const force = question.continuationMode === 'compact';
  if (fullCost <= budget && !force) return plan(full, fullCost, false);

  const references = new Set<string>();
  for (const m of normalizeQuestionNumbers(question.content).matchAll(
    /(?:Q\s*(\d+)|第\s*(\d+)\s*题)/gi
  ))
    references.add('q:' + (m[1] ?? m[2]));
  for (const m of question.content.matchAll(
    /[“「"`]([^”」"`\n]{2,160})[”」"`]/g
  ))
    references.add('s:' + m[1]);
  const included = new Map<number, LocalAiMessage[]>();
  const matchedHeadings = new Set<string>();
  // An explicit reference such as "Java 的 Q6" takes precedence over a
  // broader heading such as "Java", which could span the whole answer.
  const headingQuery = references.size ? '' : question.content;
  for (let i = turns.length - 1; i >= 0; i--) {
    if (!headingQuery && !references.size) break;
    const t = turns[i];
    const passage = findPassages(
      String(t.answer.content),
      headingQuery,
      references,
      matchedHeadings
    )
      .join('\n')
      .trim();
    if (passage)
      included.set(i, [t.user, { role: 'assistant', content: passage }]);
  }

  const last = turns.at(-1);
  if (last && isContinuation(question) && !included.has(turns.length - 1)) {
    const remaining = budget - (await measure([system, last.user, latest]));
    if (remaining < 32) return null;
    included.set(turns.length - 1, [
      last.user,
      {
        role: 'assistant',
        content: answerTail(
          String(last.answer.content),
          Math.min(remaining, budget / 4)
        )
      }
    ]);
  }

  const originalTask = isContinuation(question)
    ? [...turns].reverse().find((t) => !isContinuation(t.question))
    : turns[0];
  if (originalTask?.question.attachments?.length && isContinuation(question)) {
    const taskIndex = turns.indexOf(originalTask);
    if (!included.has(taskIndex)) {
      included.set(taskIndex, [
        originalTask.user,
        {
          role: 'assistant',
          content: answerTail(String(originalTask.answer.content), 128)
        }
      ]);
    }
  }
  const assemble = () => {
    const constraints = new Set<string>();
    for (const [i, turn] of turns.entries()) {
      if (included.has(i)) continue;
      for (const line of turn.question.content.split('\n')) {
        if (
          turn === originalTask ||
          /必须|不要|请用|仅用|要求|约束|禁止|\b(?:must|only|never|always)\b/i.test(
            line
          )
        )
          constraints.add(line);
      }
    }
    const prefix = constraints.size
      ? options.constraintsLabel + '\n' + [...constraints].join('\n') + '\n\n'
      : '';
    const content = !prefix
      ? latest.content
      : typeof latest.content === 'string'
        ? prefix + latest.content
        : [{ type: 'text' as const, text: prefix }, ...latest.content];
    return [
      system,
      ...[...included].sort(([a], [b]) => a - b).flatMap(([, pair]) => pair),
      { role: 'user' as const, content }
    ];
  };
  const required = assemble();
  const requiredCost = await measure(required);
  if (requiredCost > budget) return null;

  let available = budget - requiredCost;
  for (let i = turns.length - 1; i >= 0; i--) {
    const turn = turns[i];
    const before = included.get(i);
    if (force && before) continue;
    const pair = [turn.user, turn.answer];
    const extra = estimateChatTokens(pair) - estimateChatTokens(before ?? []);
    if (extra > available) {
      if (!before && !included.size && i === turns.length - 1) {
        const tailBudget = Math.min(
          available - estimateChatTokens([turn.user]),
          budget / 4
        );
        if (tailBudget >= 128) {
          const excerpt = [
            turn.user,
            {
              role: 'assistant' as const,
              content: answerTail(String(turn.answer.content), tailBudget)
            }
          ];
          included.set(i, excerpt);
          available -= estimateChatTokens(excerpt);
        }
      }
      continue;
    }
    included.set(i, pair);
    available -= extra;
  }
  const result = assemble();
  const cost = await measure(result);
  if (cost > budget) return plan(required, requiredCost, true);
  const compacted =
    result.length !== full.length ||
    result.some((message, i) => message.content !== full[i].content);
  return plan(result, cost, compacted);
}

export function replyLimitReason(
  message: ChatMessage
): 'output' | 'context' | 'length' | undefined {
  if (
    message.streaming ||
    message.stopped ||
    message.error ||
    message.interrupted ||
    message.repetitionStopped ||
    message.stats?.finishReason !== 'length'
  )
    return;
  const { completionTokens, totalTokens, ctxSize } = message.stats;
  const output = Boolean(
    message.requestOutputLimit &&
      completionTokens !== undefined &&
      completionTokens >= message.requestOutputLimit
  );
  const context = Boolean(
    message.requestOutputLimit !== undefined &&
      ctxSize &&
      totalTokens !== undefined &&
      totalTokens === ctxSize
  );
  if (output === context) return 'length';
  return output ? 'output' : 'context';
}
