import { PropType } from 'vue';
import { optionSourceProps } from './select';
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {
        tselectRef: unknown;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
    valueCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    optionSource: {
        type: PropType<optionSourceProps[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationOption: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    input: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "select-input": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
    valueCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    optionSource: {
        type: PropType<optionSourceProps[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationOption: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSelect-input"?: ((...args: any[]) => any) | undefined;
}>, {
    filterable: boolean;
    multiple: boolean;
    valueCustom: string;
    labelCustom: string;
    optionSource: optionSourceProps[];
    isShowPagination: boolean;
    paginationOption: Record<string, any>;
    useVirtual: boolean;
    returnObject: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
