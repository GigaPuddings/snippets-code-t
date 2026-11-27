// Kept with the plugin so installed bundles can localize the new controls.
export const chatContextMessages = {
  'zh-CN': {
    automatic: '自动',
    output: '已达到本轮设置的输出上限。',
    context: '本轮上下文窗口已满。',
    length: '达到生成限制。',
    continue: '继续生成',
    compactContinue: '精简上下文并继续',
    continuePrompt:
      '请从上一条回复的结尾继续，完成原任务，避免重复已给出的内容。',
    constraints: '先前的任务要求（用户原文）',
    compacted: '本轮已精简较早的对话，完整记录仍可查看。',
    tooLarge:
      '当前问题和需要保留的原文超出输入预算。请选择更小的段落、缩短问题或调整上下文及输出设置。',
    attachmentTooLarge:
      '问题、附件和必要原文超出输入预算。可先缩小附件「{name}」，或调整上下文及输出设置。'
  },
  'en-US': {
    automatic: 'Auto',
    output: 'The reply reached its configured output limit.',
    context: 'This reply filled the context window.',
    length: 'Generation reached a length limit.',
    continue: 'Continue generating',
    compactContinue: 'Shorten context and continue',
    continuePrompt:
      'Continue from the end of the previous reply and finish the original task without repeating completed material.',
    constraints: 'Earlier task requirements (user’s words)',
    compacted:
      'Earlier turns were shortened for this reply. The full conversation is still available.',
    tooLarge:
      'The question and required passages exceed the input budget. Select a shorter passage, shorten the question, or adjust the context and output settings.',
    attachmentTooLarge:
      'The question, attachments and required passages exceed the input budget. Try reducing “{name}” or adjusting the context and output settings.'
  }
};
