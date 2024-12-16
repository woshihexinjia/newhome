import { PropType } from 'vue';
import { columnProps } from './stepWizard';
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>>;
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    stepData: {
        type: PropType<columnProps[]>;
        default: () => never[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    complete: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    stepData: {
        type: PropType<columnProps[]>;
        default: () => never[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onComplete?: ((...args: any[]) => any) | undefined;
}>, {
    stepData: columnProps[];
    successTitle: string;
    lastBtnTitle: string;
    active: number;
    isShowLastSuccess: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
