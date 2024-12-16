declare const TDatePicker: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (ArrayConstructor | DateConstructor | StringConstructor)[];
        };
        plusTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
            validator: (value: string) => boolean;
            default: string;
        };
        shortcuts: {
            type: ArrayConstructor;
        };
        isPickerOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        state: {
            dateOptions: unknown[] | undefined;
        };
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        type: "datetimerange" | "daterange" | "monthrange" | "date" | "week" | "month" | "year" | "dates" | "months" | "years" | "datetime";
        plusTime: boolean;
        isPickerOptions: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (ArrayConstructor | DateConstructor | StringConstructor)[];
        };
        plusTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import('vue').PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
            validator: (value: string) => boolean;
            default: string;
        };
        shortcuts: {
            type: ArrayConstructor;
        };
        isPickerOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        state: {
            dateOptions: unknown[] | undefined;
        };
    }, {}, {}, {}, {
        type: "datetimerange" | "daterange" | "monthrange" | "date" | "week" | "month" | "year" | "dates" | "months" | "years" | "datetime";
        plusTime: boolean;
        isPickerOptions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | DateConstructor | StringConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import('vue').PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    state: {
        dateOptions: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, {
    type: "datetimerange" | "daterange" | "monthrange" | "date" | "week" | "month" | "year" | "dates" | "months" | "years" | "datetime";
    plusTime: boolean;
    isPickerOptions: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
}) & import('vue').Plugin) & Record<string, any>;
export default TDatePicker;
