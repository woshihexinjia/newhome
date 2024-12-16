declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
        append?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    decimalLimit: {
        type: NumberConstructor;
        default: number;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    appendTitle: {
        type: StringConstructor;
        default: string;
    };
    showThousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTip: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    decimalLimit: {
        type: NumberConstructor;
        default: number;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    appendTitle: {
        type: StringConstructor;
        default: string;
    };
    showThousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTip: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    placeholder: string;
    modelValue: string | number;
    decimalLimit: number;
    inputType: string;
    appendTitle: string;
    showThousands: boolean;
    isTip: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
