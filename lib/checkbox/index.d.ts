declare const TCheckbox: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<"check" | "button">;
            validator: (value: string) => boolean;
            default: string;
        };
        options: {
            type: import('vue').PropType<import('./src/checkbox').CheckboxItem[]>;
            default: () => never[];
        };
        size: {
            type: import('vue').PropType<"large" | "default" | "small">;
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
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: "default" | "small" | "large";
        type: "button" | "check";
        props: Record<string, any>;
        options: import('./src/checkbox').CheckboxItem[];
        border: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<"check" | "button">;
            validator: (value: string) => boolean;
            default: string;
        };
        options: {
            type: import('vue').PropType<import('./src/checkbox').CheckboxItem[]>;
            default: () => never[];
        };
        size: {
            type: import('vue').PropType<"large" | "default" | "small">;
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        size: "default" | "small" | "large";
        type: "button" | "check";
        props: Record<string, any>;
        options: import('./src/checkbox').CheckboxItem[];
        border: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"check" | "button">;
        validator: (value: string) => boolean;
        default: string;
    };
    options: {
        type: import('vue').PropType<import('./src/checkbox').CheckboxItem[]>;
        default: () => never[];
    };
    size: {
        type: import('vue').PropType<"large" | "default" | "small">;
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
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: "default" | "small" | "large";
    type: "button" | "check";
    props: Record<string, any>;
    options: import('./src/checkbox').CheckboxItem[];
    border: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        value: string | number | boolean;
        label: string;
        slot?: string;
        disabled?: boolean;
    }) => any>> & {
        default?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TCheckbox;
