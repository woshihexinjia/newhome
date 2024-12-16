declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        TLayoutPageRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    keepScrollDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNoMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    showGoTopButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToTop: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    keepScrollDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isNoMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    showGoTopButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToTop: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    keepScrollDisabled: boolean;
    isNoMargin: boolean;
    showGoTopButton: boolean;
    scrollToTop: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
