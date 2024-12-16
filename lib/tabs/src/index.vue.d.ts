import { tabProps } from './tabs';
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>>;
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<tabProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    tabsChange: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<tabProps> & Readonly<{
    onTabsChange?: ((...args: any[]) => any) | undefined;
}>, {
    tabs: import('./tabs').itemProps[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
