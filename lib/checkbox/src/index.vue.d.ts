import { PropType } from 'vue';
import { CheckboxItem } from './checkbox';
declare function __VLS_template(): {
    slots: Partial<Record<string, (_: {
        value: string | number | boolean;
        label: string;
        slot?: string;
        disabled?: boolean;
    }) => any>> & {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: PropType<"check" | "button">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: PropType<CheckboxItem[]>;
        default: () => never[];
    };
    size: {
        type: PropType<"large" | "default" | "small">;
        validator: (value: string) => boolean;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: PropType<"check" | "button">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: PropType<CheckboxItem[]>;
        default: () => never[];
    };
    size: {
        type: PropType<"large" | "default" | "small">;
        validator: (value: string) => boolean;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{}>, {
    size: "default" | "small" | "large";
    type: "button" | "check";
    props: Record<string, any>;
    options: CheckboxItem[];
    border: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
