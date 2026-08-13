import { describe, expect, it, vi } from 'vitest';

vi.mock('./CodeBlockHighlightComponent.vue', () => ({ default: {} }));

import { detectLanguage, resolveCodeBlockLang } from './CodeBlockHighlight';

describe('code block language detection', () => {
  it.each([
    ['mysqldump --opt test > mysql.test', 'bash'],
    ['mysqlimport -u root -p database file.txt', 'bash'],
    ['说明文字\nuse test;\nload data local infile "file.txt" into table users;', 'sql']
  ])('detects database command blocks for syntax highlighting', (code, language) => {
    expect(detectLanguage(code)).toBe(language);
    expect(resolveCodeBlockLang(null, code)).toBe(language);
  });

  it('keeps an explicitly selected language above auto detection', () => {
    expect(resolveCodeBlockLang('python', 'mysqldump --opt test')).toBe('python');
  });

  it.each([
    ['react', 'export function App() { return <main>Hello</main>; }', 'jsx'],
    ['react', 'interface Props { name: string }\nconst App = ({ name }: Props) => <main>{name}</main>;', 'tsx'],
    ['react-ts', 'const App = (): JSX.Element => <main />;', 'tsx'],
    ['tauri', '#[tauri::command]\nfn greet(name: &str) -> String { name.into() }', 'rust'],
    ['tauri', "import { invoke } from '@tauri-apps/api/core';\nawait invoke('greet');", 'typescript'],
    ['tauri', '[dependencies]\ntauri = { version = "2" }', 'toml']
  ])('resolves framework fence %s to a loaded grammar', (fence, code, language) => {
    expect(resolveCodeBlockLang(fence, code)).toBe(language);
  });

  it.each([
    ['const App = () => <section className="app">Hello</section>;', 'jsx'],
    ['const [open, setOpen] = useState<boolean>(false);\nreturn <Dialog open={open} />;', 'tsx'],
    ['#[tauri::command]\npub fn open_window() {}', 'rust'],
    ["import { invoke } from '@tauri-apps/api/core';", 'typescript']
  ])('auto detects React and Tauri code', (code, language) => {
    expect(detectLanguage(code)).toBe(language);
  });
});
