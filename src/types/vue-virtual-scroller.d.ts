declare module 'vue-virtual-scroller' {
  import { DefineComponent } from 'vue';

  export interface RecycleScrollerProps {
    items: any[];
    itemSize: number;
    buffer?: number;
    keyField?: string;
    direction?: 'vertical' | 'horizontal';
    listTag?: string;
    itemTag?: string;
  }

  export const RecycleScroller: DefineComponent<RecycleScrollerProps>;
  export const DynamicScroller: DefineComponent<any>;
  export const DynamicScrollerItem: DefineComponent<any>;
}

