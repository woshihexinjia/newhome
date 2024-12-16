import { PropType } from 'vue';
type enums = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    time: {
        type: NumberConstructor;
        default: number;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: PropType<enums>;
        default: string;
    };
    tipProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isDebounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    time: {
        type: NumberConstructor;
        default: number;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: PropType<enums>;
        default: string;
    };
    tipProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isDebounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    time: number;
    placement: enums;
    tip: string;
    tipProps: Record<string, any>;
    isDebounce: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
