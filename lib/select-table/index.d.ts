declare const TSelectTable: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        inputValue: {
            type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        modelValue: {
            type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: import('vue').PropType<import('./src/selectTable').columnProps[]>;
            default: () => never[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectable: {
            type: import('vue').PropType<(row: any, index: number) => boolean>;
        };
        useVirtual: BooleanConstructor;
        virtualShowSize: {
            type: NumberConstructor;
            default: number;
        };
        multipleFixed: BooleanConstructor;
        radioFixed: BooleanConstructor;
        multipleDisableDelete: BooleanConstructor;
        defaultValIsOpenRadioChange: BooleanConstructor;
        radioSameIsCancel: {
            type: BooleanConstructor;
            default: boolean;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        tableSize: {
            type: import('vue').PropType<"" | "large" | "default" | "small">;
            default: string;
        };
        align: {
            type: import('vue').PropType<"left" | "center" | "right">;
            default: string;
        };
        paginationSize: {
            type: import('vue').PropType<"" | "large" | "default" | "small">;
            default: string;
        };
    }>> & Readonly<{
        onSelectionChange?: ((...args: any[]) => any) | undefined;
        "onPage-change"?: ((...args: any[]) => any) | undefined;
        onRadioChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
        "onInput-focus"?: ((...args: any[]) => any) | undefined;
        "onInput-blur"?: ((...args: any[]) => any) | undefined;
        "onInput-clear"?: ((...args: any[]) => any) | undefined;
        "onInput-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        clear: () => void;
        props: {
            readonly align: "left" | "right" | "center";
            readonly reserveSelection: boolean;
            readonly filterable: boolean;
            readonly columns: import('./src/selectTable').columnProps[];
            readonly table: Record<string, any>;
            readonly border: boolean;
            readonly tableSize: "" | "default" | "small" | "large";
            readonly multiple: boolean;
            readonly isShowPagination: boolean;
            readonly useVirtual: boolean;
            readonly isShowInput: boolean;
            readonly inputWidth: string | number;
            readonly inputAttr: Record<string, any>;
            readonly radioTxt: string;
            readonly isShowQuery: boolean;
            readonly isClearQuery: boolean;
            readonly isShowBlurBtn: boolean;
            readonly btnBind: Record<string, any>;
            readonly rowClickRadio: boolean;
            readonly isShowFirstColumn: boolean;
            readonly keywords: Record<string, any>;
            readonly isKeyup: boolean;
            readonly selectWidth: string | number;
            readonly tableWidth: string | number;
            readonly selfExpanded: boolean;
            readonly isExpanded: boolean;
            readonly defaultSelectVal: unknown[];
            readonly virtualShowSize: number;
            readonly multipleFixed: boolean;
            readonly radioFixed: boolean;
            readonly multipleDisableDelete: boolean;
            readonly defaultValIsOpenRadioChange: boolean;
            readonly radioSameIsCancel: boolean;
            readonly paginationSize: "" | "default" | "small" | "large";
            readonly selectable?: ((row: any, index: number) => boolean) | undefined;
            readonly filterMethod?: Function | undefined;
            readonly value?: string | number | unknown[] | undefined;
            readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
        };
        tQueryConditionRef: import('vue').Ref<any, any>;
        selectRef: import('vue').Ref<any, any>;
        selectTable: import('vue').Ref<any, any>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        selectionChange: (...args: any[]) => void;
        "page-change": (...args: any[]) => void;
        radioChange: (...args: any[]) => void;
        "update:inputValue": (...args: any[]) => void;
        "input-focus": (...args: any[]) => void;
        "input-blur": (...args: any[]) => void;
        "input-clear": (...args: any[]) => void;
        "input-click": (...args: any[]) => void;
    }, import('vue').PublicProps, {
        align: "left" | "right" | "center";
        reserveSelection: boolean;
        filterable: boolean;
        columns: import('./src/selectTable').columnProps[];
        table: Record<string, any>;
        modelValue: string | number | boolean | Record<string, any> | unknown[];
        border: boolean;
        tableSize: "" | "default" | "small" | "large";
        multiple: boolean;
        isShowPagination: boolean;
        useVirtual: boolean;
        inputValue: string | number | boolean | Record<string, any> | unknown[];
        isShowInput: boolean;
        inputWidth: string | number;
        inputAttr: Record<string, any>;
        radioTxt: string;
        isShowQuery: boolean;
        isClearQuery: boolean;
        isShowBlurBtn: boolean;
        btnBind: Record<string, any>;
        rowClickRadio: boolean;
        isShowFirstColumn: boolean;
        keywords: Record<string, any>;
        isKeyup: boolean;
        selectWidth: string | number;
        tableWidth: string | number;
        selfExpanded: boolean;
        isExpanded: boolean;
        defaultSelectVal: unknown[];
        virtualShowSize: number;
        multipleFixed: boolean;
        radioFixed: boolean;
        multipleDisableDelete: boolean;
        defaultValIsOpenRadioChange: boolean;
        radioSameIsCancel: boolean;
        paginationSize: "" | "default" | "small" | "large";
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        inputValue: {
            type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        modelValue: {
            type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
            default: undefined;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: import('vue').PropType<import('./src/selectTable').columnProps[]>;
            default: () => never[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectable: {
            type: import('vue').PropType<(row: any, index: number) => boolean>;
        };
        useVirtual: BooleanConstructor;
        virtualShowSize: {
            type: NumberConstructor;
            default: number;
        };
        multipleFixed: BooleanConstructor;
        radioFixed: BooleanConstructor;
        multipleDisableDelete: BooleanConstructor;
        defaultValIsOpenRadioChange: BooleanConstructor;
        radioSameIsCancel: {
            type: BooleanConstructor;
            default: boolean;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        tableSize: {
            type: import('vue').PropType<"" | "large" | "default" | "small">;
            default: string;
        };
        align: {
            type: import('vue').PropType<"left" | "center" | "right">;
            default: string;
        };
        paginationSize: {
            type: import('vue').PropType<"" | "large" | "default" | "small">;
            default: string;
        };
    }>> & Readonly<{
        onSelectionChange?: ((...args: any[]) => any) | undefined;
        "onPage-change"?: ((...args: any[]) => any) | undefined;
        onRadioChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
        "onInput-focus"?: ((...args: any[]) => any) | undefined;
        "onInput-blur"?: ((...args: any[]) => any) | undefined;
        "onInput-clear"?: ((...args: any[]) => any) | undefined;
        "onInput-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
        clear: () => void;
        props: {
            readonly align: "left" | "right" | "center";
            readonly reserveSelection: boolean;
            readonly filterable: boolean;
            readonly columns: import('./src/selectTable').columnProps[];
            readonly table: Record<string, any>;
            readonly border: boolean;
            readonly tableSize: "" | "default" | "small" | "large";
            readonly multiple: boolean;
            readonly isShowPagination: boolean;
            readonly useVirtual: boolean;
            readonly isShowInput: boolean;
            readonly inputWidth: string | number;
            readonly inputAttr: Record<string, any>;
            readonly radioTxt: string;
            readonly isShowQuery: boolean;
            readonly isClearQuery: boolean;
            readonly isShowBlurBtn: boolean;
            readonly btnBind: Record<string, any>;
            readonly rowClickRadio: boolean;
            readonly isShowFirstColumn: boolean;
            readonly keywords: Record<string, any>;
            readonly isKeyup: boolean;
            readonly selectWidth: string | number;
            readonly tableWidth: string | number;
            readonly selfExpanded: boolean;
            readonly isExpanded: boolean;
            readonly defaultSelectVal: unknown[];
            readonly virtualShowSize: number;
            readonly multipleFixed: boolean;
            readonly radioFixed: boolean;
            readonly multipleDisableDelete: boolean;
            readonly defaultValIsOpenRadioChange: boolean;
            readonly radioSameIsCancel: boolean;
            readonly paginationSize: "" | "default" | "small" | "large";
            readonly selectable?: ((row: any, index: number) => boolean) | undefined;
            readonly filterMethod?: Function | undefined;
            readonly value?: string | number | unknown[] | undefined;
            readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
        };
        tQueryConditionRef: import('vue').Ref<any, any>;
        selectRef: import('vue').Ref<any, any>;
        selectTable: import('vue').Ref<any, any>;
    }, {}, {}, {}, {
        align: "left" | "right" | "center";
        reserveSelection: boolean;
        filterable: boolean;
        columns: import('./src/selectTable').columnProps[];
        table: Record<string, any>;
        modelValue: string | number | boolean | Record<string, any> | unknown[];
        border: boolean;
        tableSize: "" | "default" | "small" | "large";
        multiple: boolean;
        isShowPagination: boolean;
        useVirtual: boolean;
        inputValue: string | number | boolean | Record<string, any> | unknown[];
        isShowInput: boolean;
        inputWidth: string | number;
        inputAttr: Record<string, any>;
        radioTxt: string;
        isShowQuery: boolean;
        isClearQuery: boolean;
        isShowBlurBtn: boolean;
        btnBind: Record<string, any>;
        rowClickRadio: boolean;
        isShowFirstColumn: boolean;
        keywords: Record<string, any>;
        isKeyup: boolean;
        selectWidth: string | number;
        tableWidth: string | number;
        selfExpanded: boolean;
        isExpanded: boolean;
        defaultSelectVal: unknown[];
        virtualShowSize: number;
        multipleFixed: boolean;
        radioFixed: boolean;
        multipleDisableDelete: boolean;
        defaultValIsOpenRadioChange: boolean;
        radioSameIsCancel: boolean;
        paginationSize: "" | "default" | "small" | "large";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    inputValue: {
        type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | ArrayConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    isShowInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    inputAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    value: {
        type: (ArrayConstructor | NumberConstructor | StringConstructor)[];
    };
    table: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: import('vue').PropType<import('./src/selectTable').columnProps[]>;
        default: () => never[];
    };
    radioTxt: {
        type: StringConstructor;
        default: string;
    };
    isShowQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isClearQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBlurBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnBind: {
        type: ObjectConstructor;
        default: () => {
            btnTxt: string;
        };
    };
    rowClickRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowFirstColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    reserveSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMethod: {
        type: FunctionConstructor;
    };
    keywords: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            value: string;
        };
    };
    isKeyup: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    tableWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    selfExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultSelectVal: {
        type: ArrayConstructor;
        default: () => never[];
    };
    selectable: {
        type: import('vue').PropType<(row: any, index: number) => boolean>;
    };
    useVirtual: BooleanConstructor;
    virtualShowSize: {
        type: NumberConstructor;
        default: number;
    };
    multipleFixed: BooleanConstructor;
    radioFixed: BooleanConstructor;
    multipleDisableDelete: BooleanConstructor;
    defaultValIsOpenRadioChange: BooleanConstructor;
    radioSameIsCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableSize: {
        type: import('vue').PropType<"" | "large" | "default" | "small">;
        default: string;
    };
    align: {
        type: import('vue').PropType<"left" | "center" | "right">;
        default: string;
    };
    paginationSize: {
        type: import('vue').PropType<"" | "large" | "default" | "small">;
        default: string;
    };
}>> & Readonly<{
    onSelectionChange?: ((...args: any[]) => any) | undefined;
    "onPage-change"?: ((...args: any[]) => any) | undefined;
    onRadioChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
    "onInput-focus"?: ((...args: any[]) => any) | undefined;
    "onInput-blur"?: ((...args: any[]) => any) | undefined;
    "onInput-clear"?: ((...args: any[]) => any) | undefined;
    "onInput-click"?: ((...args: any[]) => any) | undefined;
}>, {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    props: {
        readonly align: "left" | "right" | "center";
        readonly reserveSelection: boolean;
        readonly filterable: boolean;
        readonly columns: import('./src/selectTable').columnProps[];
        readonly table: Record<string, any>;
        readonly border: boolean;
        readonly tableSize: "" | "default" | "small" | "large";
        readonly multiple: boolean;
        readonly isShowPagination: boolean;
        readonly useVirtual: boolean;
        readonly isShowInput: boolean;
        readonly inputWidth: string | number;
        readonly inputAttr: Record<string, any>;
        readonly radioTxt: string;
        readonly isShowQuery: boolean;
        readonly isClearQuery: boolean;
        readonly isShowBlurBtn: boolean;
        readonly btnBind: Record<string, any>;
        readonly rowClickRadio: boolean;
        readonly isShowFirstColumn: boolean;
        readonly keywords: Record<string, any>;
        readonly isKeyup: boolean;
        readonly selectWidth: string | number;
        readonly tableWidth: string | number;
        readonly selfExpanded: boolean;
        readonly isExpanded: boolean;
        readonly defaultSelectVal: unknown[];
        readonly virtualShowSize: number;
        readonly multipleFixed: boolean;
        readonly radioFixed: boolean;
        readonly multipleDisableDelete: boolean;
        readonly defaultValIsOpenRadioChange: boolean;
        readonly radioSameIsCancel: boolean;
        readonly paginationSize: "" | "default" | "small" | "large";
        readonly selectable?: ((row: any, index: number) => boolean) | undefined;
        readonly filterMethod?: Function | undefined;
        readonly value?: string | number | unknown[] | undefined;
        readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
        readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
    };
    tQueryConditionRef: import('vue').Ref<any, any>;
    selectRef: import('vue').Ref<any, any>;
    selectTable: import('vue').Ref<any, any>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    selectionChange: (...args: any[]) => void;
    "page-change": (...args: any[]) => void;
    radioChange: (...args: any[]) => void;
    "update:inputValue": (...args: any[]) => void;
    "input-focus": (...args: any[]) => void;
    "input-blur": (...args: any[]) => void;
    "input-clear": (...args: any[]) => void;
    "input-click": (...args: any[]) => void;
}, string, {
    align: "left" | "right" | "center";
    reserveSelection: boolean;
    filterable: boolean;
    columns: import('./src/selectTable').columnProps[];
    table: Record<string, any>;
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    border: boolean;
    tableSize: "" | "default" | "small" | "large";
    multiple: boolean;
    isShowPagination: boolean;
    useVirtual: boolean;
    inputValue: string | number | boolean | Record<string, any> | unknown[];
    isShowInput: boolean;
    inputWidth: string | number;
    inputAttr: Record<string, any>;
    radioTxt: string;
    isShowQuery: boolean;
    isClearQuery: boolean;
    isShowBlurBtn: boolean;
    btnBind: Record<string, any>;
    rowClickRadio: boolean;
    isShowFirstColumn: boolean;
    keywords: Record<string, any>;
    isKeyup: boolean;
    selectWidth: string | number;
    tableWidth: string | number;
    selfExpanded: boolean;
    isExpanded: boolean;
    defaultSelectVal: unknown[];
    virtualShowSize: number;
    multipleFixed: boolean;
    radioFixed: boolean;
    multipleDisableDelete: boolean;
    defaultValIsOpenRadioChange: boolean;
    radioSameIsCancel: boolean;
    paginationSize: "" | "default" | "small" | "large";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: {
        param: any;
        scope: any;
    }) => any>> & Partial<Record<string, (_: {
        scope: any;
    }) => any>> & {
        querybar?(_: {}): any;
        toolbar?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TSelectTable;
