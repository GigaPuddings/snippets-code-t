import { describe, expect, it } from 'vitest';
import { formatIncompleteJavaScript } from './formatIncompleteCode';

describe('formatIncompleteJavaScript', () => {
  it('formats a lifecycle-method fragment without requiring an outer object', () => {
    const source = [
      'history.pushState(state, "title", document.URL);',
      "window.addEventListener('popstate', this.handleback);",
      '},',
      'onUnload(){',
      'setTimeout(() => {',
      "window.removeEventListener('popstate', this.handleback);",
      '}, 100);',
      '}'
    ].join('\n');

    expect(formatIncompleteJavaScript(source)).toBe([
      'history.pushState(state, "title", document.URL);',
      "window.addEventListener('popstate', this.handleback);",
      '},',
      'onUnload() {',
      '  setTimeout(() => {',
      "    window.removeEventListener('popstate', this.handleback);",
      '  }, 100);',
      '}'
    ].join('\n'));
  });

  it('does not count braces in strings or line comments as structure', () => {
    expect(formatIncompleteJavaScript('const label = "}";\n// {\nif (ok) {\nrun();\n}')).toBe([
      'const label = "}";',
      '// {',
      'if (ok) {',
      '  run();',
      '}'
    ].join('\n'));
  });

  it('keeps jsx children indented when the fragment cannot be parsed by prettier', () => {
    const source = [
      'export const CounterWithReducer = () => {',
      'const [count, dispatch] useReducer(countReducer, initialCount);',
      'return (',
      '<div>',
      '<p>Count: {count}</p>',
      '<button onClick={() => dispatch("increment")}>Increment</button>',
      '</div>',
      ')',
      '}'
    ].join('\n');

    expect(formatIncompleteJavaScript(source)).toBe([
      'export const CounterWithReducer = () => {',
      '  const [count, dispatch] useReducer(countReducer, initialCount);',
      '  return (',
      '    <div>',
      '      <p>Count: {count}</p>',
      '      <button onClick={() => dispatch("increment")}>Increment</button>',
      '    </div>',
      '  )',
      '}'
    ].join('\n'));
  });

  it('aligns multiline jsx expression braces inside nested tags', () => {
    const source = [
      'return (',
      '<div>',
      '<div>',
      '{state.items.map((item) =>',
      '<div key={item.id}>',
      '<p>',
      '{item.name} - ${item.price} x {item.quantity}',
      '</p>',
      '</div>',
      ')}',
      '</div>',
      '<h3>Total amount: {state.totalAmount.toFixed(2)}</h3>',
      '{state.items.length > 0 && (',
      '<button onClick={() => dispatch({type: "CLEAR_CART"})}>x</button>',
      ')}',
      '</div>',
      ');'
    ].join('\n');

    expect(formatIncompleteJavaScript(source)).toBe([
      'return (',
      '  <div>',
      '    <div>',
      '      {state.items.map((item) =>',
      '        <div key={item.id}>',
      '          <p>',
      '            {item.name} - ${item.price} x {item.quantity}',
      '          </p>',
      '        </div>',
      '      )}',
      '    </div>',
      '    <h3>Total amount: {state.totalAmount.toFixed(2)}</h3>',
      '    {state.items.length > 0 && (',
      '      <button onClick={() => dispatch({type: "CLEAR_CART"})}>x</button>',
      '    )}',
      '  </div>',
      ');'
    ].join('\n'));
  });
});
