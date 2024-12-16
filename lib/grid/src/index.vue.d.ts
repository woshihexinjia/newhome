import { BreakPoint } from '../interface';
type Props = {
    cols?: number | Record<BreakPoint, number>;
    collapsed?: boolean;
    collapsedRows?: number;
    gap?: [number, number] | number;
};
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    breakPoint: import('vue').Ref<BreakPoint, BreakPoint>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    cols: number | Record<BreakPoint, number>;
    collapsed: boolean;
    collapsedRows: number;
    gap: [number, number] | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
