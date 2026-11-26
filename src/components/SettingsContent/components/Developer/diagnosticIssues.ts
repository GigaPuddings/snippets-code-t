import {
  isBenignDiagnosticWarning,
  redactDiagnosticText,
  type FrontendDiagnosticEntry
} from '@/utils/developer-diagnostics';

interface DiagnosticOccurrence {
  module: string;
  level: 'error' | 'warn';
  timestamp: number;
  title: string;
  description?: string;
  windowLabel?: string;
}

export interface RecentDiagnosticIssue extends DiagnosticOccurrence {
  id: string;
  count: number;
}

const backendLogHeader =
  /^\[(\d{4}-\d{2}-\d{2})\]\[(\d{2}:\d{2}:\d{2})\]\[([^\]]+)\]\[(ERROR|WARN|DEBUG|INFO|TRACE)\]\s*(.*)$/;
const frontendLogPrefix = '[Frontend] ';

export function collectRecentDiagnosticIssues(
  frontend: FrontendDiagnosticEntry[],
  backend: string
): RecentDiagnosticIssue[] {
  const issues = new Map<string, RecentDiagnosticIssue>();
  function add(entry: DiagnosticOccurrence) {
    const id = JSON.stringify([
      entry.module,
      entry.windowLabel,
      entry.level,
      entry.title,
      entry.description
    ]);
    const previous = issues.get(id);
    const newest =
      previous && previous.timestamp > entry.timestamp ? previous : entry;
    issues.set(id, { ...newest, id, count: (previous?.count ?? 0) + 1 });
  }

  for (const entry of frontend) {
    if (entry.level !== 'error' && entry.level !== 'warn') continue;
    const text = [entry.message, entry.data].filter(Boolean).join('\n');
    if (entry.level === 'warn' && isBenignDiagnosticWarning(text)) continue;
    add({
      module: 'frontend',
      windowLabel: entry.windowLabel,
      level: entry.level,
      timestamp: Date.parse(entry.timestamp),
      title: redactDiagnosticText(entry.message),
      description: entry.data ? redactDiagnosticText(entry.data) : undefined
    });
  }
  for (const line of backend.split('\n')) {
    const match = backendLogHeader.exec(line);
    if (!match) continue;
    const [, date, time, target, level, message] = match;
    if (level !== 'ERROR' && level !== 'WARN') continue;
    // The backend file also carries a copy of the frontend stream.
    if (message.startsWith(frontendLogPrefix)) continue;
    if (level === 'WARN' && isBenignDiagnosticWarning(message)) continue;
    add({
      module: target,
      level: level === 'ERROR' ? 'error' : 'warn',
      timestamp: Date.parse(`${date}T${time}Z`),
      title: redactDiagnosticText(message)
    });
  }
  return Array.from(issues.values()).sort((a, b) => b.timestamp - a.timestamp);
}
