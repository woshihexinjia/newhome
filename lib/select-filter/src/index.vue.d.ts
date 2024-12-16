export interface OptionsProps {
    value: string | number;
    label: string;
    icon?: string;
}
export interface SelectDataProps {
    title: string;
    key: string;
    multiple?: boolean;
    options: OptionsProps[];
}
export interface SelectFilterProps {
    data?: SelectDataProps[];
    defaultValues?: {
        [key: string]: any;
    };
}
declare function __VLS_template(): {
    slots: {
        default?(_: {
            row: OptionsProps;
        }): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SelectFilterProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: any) => any;
}, string, import('vue').PublicProps, Readonly<SelectFilterProps> & Readonly<{
    onChange?: ((value: any) => any) | undefined;
}>, {
    data: SelectDataProps[];
    defaultValues: {
        [key: string]: any;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
