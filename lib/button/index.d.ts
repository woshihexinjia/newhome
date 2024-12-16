declare const TButton: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        time: {
            type: NumberConstructor;
            default: number;
        };
        tip: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: import('vue').PropType<"top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end">;
            default: string;
        };
        tipProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        isDebounce: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        time: number;
        placement: "top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
        tip: string;
        tipProps: Record<string, any>;
        isDebounce: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        time: {
            type: NumberConstructor;
            default: number;
        };
        tip: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: import('vue').PropType<"top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end">;
            default: string;
        };
        tipProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        isDebounce: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        time: number;
        placement: "top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
        tip: string;
        tipProps: Record<string, any>;
        isDebounce: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    time: {
        type: NumberConstructor;
        default: number;
    };
    tip: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: import('vue').PropType<"top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end">;
        default: string;
    };
    tipProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isDebounce: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, {
    time: number;
    placement: "top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    tip: string;
    tipProps: Record<string, any>;
    isDebounce: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TButton;
