import { Responsive } from '../interface/index';
type Props = {
    offset?: number;
    span?: number;
    suffix?: boolean;
    xs?: Responsive;
    sm?: Responsive;
    md?: Responsive;
    lg?: Responsive;
    xl?: Responsive;
};
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    xs: Responsive;
    sm: Responsive;
    md: Responsive;
    lg: Responsive;
    xl: Responsive;
    span: number;
    offset: number;
    suffix: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
