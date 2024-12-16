declare const TSelect: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (ObjectConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: StringConstructor;
        };
        valueCustom: {
            type: StringConstructor;
            default: string;
        };
        labelCustom: {
            type: StringConstructor;
            default: string;
        };
        customLabel: {
            type: StringConstructor;
        };
        optionSource: {
            type: import('vue').PropType<import('./src/select').optionSourceProps[]>;
            default: () => never[];
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationOption: {
            type: ObjectConstructor;
            default: () => {
                pageSize: number;
                currentPage: number;
                pagerCount: number;
                total: number;
            };
        };
        useVirtual: {
            type: BooleanConstructor;
            default: boolean;
        };
        returnObject: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onInput?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onSelect-input"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        input: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
        "select-input": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        filterable: boolean;
        multiple: boolean;
        valueCustom: string;
        labelCustom: string;
        optionSource: import('./src/select').optionSourceProps[];
        isShowPagination: boolean;
        paginationOption: Record<string, any>;
        useVirtual: boolean;
        returnObject: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        modelValue: {
            type: (ObjectConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: StringConstructor;
        };
        valueCustom: {
            type: StringConstructor;
            default: string;
        };
        labelCustom: {
            type: StringConstructor;
            default: string;
        };
        customLabel: {
            type: StringConstructor;
        };
        optionSource: {
            type: import('vue').PropType<import('./src/select').optionSourceProps[]>;
            default: () => never[];
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationOption: {
            type: ObjectConstructor;
            default: () => {
                pageSize: number;
                currentPage: number;
                pagerCount: number;
                total: number;
            };
        };
        useVirtual: {
            type: BooleanConstructor;
            default: boolean;
        };
        returnObject: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onInput?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onSelect-input"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        filterable: boolean;
        multiple: boolean;
        valueCustom: string;
        labelCustom: string;
        optionSource: import('./src/select').optionSourceProps[];
        isShowPagination: boolean;
        paginationOption: Record<string, any>;
        useVirtual: boolean;
        returnObject: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
    valueCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    optionSource: {
        type: import('vue').PropType<import('./src/select').optionSourceProps[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationOption: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSelect-input"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    input: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "select-input": (...args: any[]) => void;
}, string, {
    filterable: boolean;
    multiple: boolean;
    valueCustom: string;
    labelCustom: string;
    optionSource: import('./src/select').optionSourceProps[];
    isShowPagination: boolean;
    paginationOption: Record<string, any>;
    useVirtual: boolean;
    returnObject: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
}) & import('vue').Plugin) & Record<string, any>;
export default TSelect;
