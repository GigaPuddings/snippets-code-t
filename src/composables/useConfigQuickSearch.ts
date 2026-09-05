import { readonly, ref, type Ref } from 'vue';

const visible = ref(false);

export interface ConfigQuickSearchController {
  visible: Readonly<Ref<boolean>>;
  open: () => void;
  close: () => void;
  setVisible: (value: boolean) => void;
}

export const useConfigQuickSearch = (): ConfigQuickSearchController => ({
  visible: readonly(visible),
  open: (): void => {
    visible.value = true;
  },
  close: (): void => {
    visible.value = false;
  },
  setVisible: (value): void => {
    visible.value = value;
  }
});
