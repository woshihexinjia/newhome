import { descDataProps } from './detail';
import { PropType } from 'vue';
declare function __VLS_template(): {
    slots: Partial<Record<string, (_: {}) => any>>;
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: PropType<descDataProps[]>;
        default: () => never[];
    };
    isColon: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLabelBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: PropType<descDataProps[]>;
        default: () => never[];
    };
    isColon: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLabelBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    listTypeInfo: Record<string, any>;
    descColumn: number;
    dataList: Record<string, any>;
    descData: descDataProps[];
    isColon: boolean;
    isLabelBold: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
