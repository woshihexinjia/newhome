declare const TInput: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        decimalLimit: {
            type: NumberConstructor;
            default: number;
        };
        inputType: {
            type: StringConstructor;
            default: string;
        };
        appendTitle: {
            type: StringConstructor;
            default: string;
        };
        showThousands: {
            type: BooleanConstructor;
            default: boolean;
        };
        isTip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        placeholder: string;
        modelValue: string | number;
        decimalLimit: number;
        inputType: string;
        appendTitle: string;
        showThousands: boolean;
        isTip: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        decimalLimit: {
            type: NumberConstructor;
            default: number;
        };
        inputType: {
            type: StringConstructor;
            default: string;
        };
        appendTitle: {
            type: StringConstructor;
            default: string;
        };
        showThousands: {
            type: BooleanConstructor;
            default: boolean;
        };
        isTip: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        placeholder: string;
        modelValue: string | number;
        decimalLimit: number;
        inputType: string;
        appendTitle: string;
        showThousands: boolean;
        isTip: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    decimalLimit: {
        type: NumberConstructor;
        default: number;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    appendTitle: {
        type: StringConstructor;
        default: string;
    };
    showThousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTip: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    placeholder: string;
    modelValue: string | number;
    decimalLimit: number;
    inputType: string;
    appendTitle: string;
    showThousands: boolean;
    isTip: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
        append?(_: {}): any;
        append?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TInput;
