declare const TTabs: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/tabs').tabProps> & Readonly<{
        onTabsChange?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        tabsChange: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        tabs: import('./src/tabs').itemProps[];
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/tabs').tabProps> & Readonly<{
        onTabsChange?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        tabs: import('./src/tabs').itemProps[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/tabs').tabProps> & Readonly<{
    onTabsChange?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    tabsChange: (...args: any[]) => void;
}, string, {
    tabs: import('./src/tabs').itemProps[];
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>>;
}) & import('vue').Plugin) & Record<string, any>;
export default TTabs;
