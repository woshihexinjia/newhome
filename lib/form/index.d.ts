declare const TForm: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        className: {
            type: StringConstructor;
        };
        formOpts: {
            type: ObjectConstructor;
            default: () => {};
        };
        widthSize: {
            type: import('vue').PropType<1 | 2 | 3 | 4 | 5 | 6>;
            validator: (value: number) => boolean;
            default: number;
        };
        labelPosition: {
            type: import('vue').PropType<"left" | "right" | "top">;
            default: string;
        };
        isTrim: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onHandleEvent?: ((...args: any[]) => any) | undefined;
        onGetRefs?: ((...args: any[]) => any) | undefined;
    }>, any, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
        handleEvent: (...args: any[]) => void;
        getRefs: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        labelPosition: "top" | "left" | "right";
        widthSize: 1 | 2 | 3 | 4 | 5 | 6;
        formOpts: Record<string, any>;
        isTrim: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        className: {
            type: StringConstructor;
        };
        formOpts: {
            type: ObjectConstructor;
            default: () => {};
        };
        widthSize: {
            type: import('vue').PropType<1 | 2 | 3 | 4 | 5 | 6>;
            validator: (value: number) => boolean;
            default: number;
        };
        labelPosition: {
            type: import('vue').PropType<"left" | "right" | "top">;
            default: string;
        };
        isTrim: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onHandleEvent?: ((...args: any[]) => any) | undefined;
        onGetRefs?: ((...args: any[]) => any) | undefined;
    }>, any, {}, {}, {}, {
        labelPosition: "top" | "left" | "right";
        widthSize: 1 | 2 | 3 | 4 | 5 | 6;
        formOpts: Record<string, any>;
        isTrim: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: import('vue').PropType<1 | 2 | 3 | 4 | 5 | 6>;
        validator: (value: number) => boolean;
        default: number;
    };
    labelPosition: {
        type: import('vue').PropType<"left" | "right" | "top">;
        default: string;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onHandleEvent?: ((...args: any[]) => any) | undefined;
    onGetRefs?: ((...args: any[]) => any) | undefined;
}>, any, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    handleEvent: (...args: any[]) => void;
    getRefs: (...args: any[]) => void;
}, string, {
    labelPosition: "top" | "left" | "right";
    widthSize: 1 | 2 | 3 | 4 | 5 | 6;
    formOpts: Record<string, any>;
    isTrim: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<any, (_: {
        scope: any;
    }) => any>> & Partial<Record<any, (_: {
        scope: any;
    }) => any>> & Partial<Record<any, (_: {}) => any>> & Partial<Record<any, (_: {}) => any>>;
}) & import('vue').Plugin) & Record<string, any>;
export default TForm;
