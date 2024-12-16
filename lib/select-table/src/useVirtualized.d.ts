import { Ref } from 'vue';
export declare function useVirtualized(): {
    scrollContainerEl: Ref<any, any>;
    updateRenderedItemCache: (index: number) => void;
    updateOffset: (offset: number) => void;
    getDom: (props: {
        multiple: boolean;
    }) => void;
    getItemHeightFromCache: (index: number | string) => any;
    saveDATA: Ref<any[], any[]>;
};
