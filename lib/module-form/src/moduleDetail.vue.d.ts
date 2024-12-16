declare function __VLS_template(): {
    slots: Partial<Record<any, (_: {}) => any>> & Partial<Record<any, (_: {}) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    descData: {
        type: ObjectConstructor;
        default: () => {};
    };
    titleBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    descData: {
        type: ObjectConstructor;
        default: () => {};
    };
    titleBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    descData: Record<string, any>;
    titleBold: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
