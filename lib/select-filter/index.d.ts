declare const HSelectFilter: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/index.vue').SelectFilterProps> & Readonly<{
        onChange?: ((value: any) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (value: any) => any;
    }, import('vue').PublicProps, {
        data: import('./src/index.vue').SelectDataProps[];
        defaultValues: {
            [key: string]: any;
        };
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/index.vue').SelectFilterProps> & Readonly<{
        onChange?: ((value: any) => any) | undefined;
    }>, {}, {}, {}, {}, {
        data: import('./src/index.vue').SelectDataProps[];
        defaultValues: {
            [key: string]: any;
        };
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/index.vue').SelectFilterProps> & Readonly<{
    onChange?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: any) => any;
}, string, {
    data: import('./src/index.vue').SelectDataProps[];
    defaultValues: {
        [key: string]: any;
    };
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            row: import('./src/index.vue').OptionsProps;
        }): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default HSelectFilter;
