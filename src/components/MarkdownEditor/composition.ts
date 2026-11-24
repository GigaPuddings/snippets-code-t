import { StateEffect, StateField } from '@codemirror/state';
import { ViewPlugin, type ViewUpdate } from '@codemirror/view';

const finishComposition = StateEffect.define<null>();
export const editorComposing = StateField.define<boolean>({
  create: () => false,
  update(value, transaction) {
    if (transaction.effects.some((effect) => effect.is(finishComposition)))
      return false;
    return value || transaction.isUserEvent('input.type.compose');
  }
});

const compositionTracker = ViewPlugin.fromClass(
  class {
    private timer?: ReturnType<typeof setTimeout>;

    update({ view, state }: ViewUpdate): void {
      if (this.timer || !state.field(editorComposing)) return;
      const resume = (): void => {
        if (view.compositionStarted) {
          this.timer = setTimeout(resume, 50);
          return;
        }
        this.timer = undefined;
        view.dispatch({ effects: finishComposition.of(null) });
      };
      this.timer = setTimeout(resume, 50);
    }

    destroy(): void {
      clearTimeout(this.timer);
    }
  }
);

export const trackEditorComposition = [editorComposing, compositionTracker];
