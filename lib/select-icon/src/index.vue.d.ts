declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    selectBind: ObjectConstructor;
    isShowSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    selectBind: ObjectConstructor;
    isShowSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string;
    isShowSearch: boolean;
    prefixIcon: string;
    isShowIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
