declare function __VLS_template(): {
    slots: {
        empty?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        echartRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
    id: {
        type: StringConstructor;
        default: () => string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    isEmpty: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, any, string, import('vue').PublicProps, any, {
    id: string;
    options: Record<string, any>;
    isEmpty: boolean | Function;
    description: string;
    theme: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
