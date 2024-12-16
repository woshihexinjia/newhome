declare const TModuleForm: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        handleType: {
            type: import('vue').PropType<"edit" | "desc">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: import('vue').PropType<import('./src/moduleForm').tabsProps[]>;
        submit: FunctionConstructor;
    }>> & Readonly<{
        onValidateError?: ((...args: any[]) => any) | undefined;
        onBack?: ((...args: any[]) => any) | undefined;
        onTabsChange?: ((...args: any[]) => any) | undefined;
    }>, {
        clearValidate: () => void;
        resetFormFields: () => void;
        updateFormFields: () => void;
        setSelectedTab: (key: any) => void;
        saveHandle: () => Promise<void>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        validateError: (...args: any[]) => void;
        back: (...args: any[]) => void;
        tabsChange: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        handleType: "desc" | "edit";
        isShowHeader: boolean;
        titleSlot: boolean;
        isShowBack: boolean;
        isGoBackEvent: boolean;
        btnSaveBind: Record<string, any>;
        btnCancelBind: Record<string, any>;
        isTabMargin: boolean;
        tabMarginNum: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        handleType: {
            type: import('vue').PropType<"edit" | "desc">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: import('vue').PropType<import('./src/moduleForm').tabsProps[]>;
        submit: FunctionConstructor;
    }>> & Readonly<{
        onValidateError?: ((...args: any[]) => any) | undefined;
        onBack?: ((...args: any[]) => any) | undefined;
        onTabsChange?: ((...args: any[]) => any) | undefined;
    }>, {
        clearValidate: () => void;
        resetFormFields: () => void;
        updateFormFields: () => void;
        setSelectedTab: (key: any) => void;
        saveHandle: () => Promise<void>;
    }, {}, {}, {}, {
        handleType: "desc" | "edit";
        isShowHeader: boolean;
        titleSlot: boolean;
        isShowBack: boolean;
        isGoBackEvent: boolean;
        btnSaveBind: Record<string, any>;
        btnCancelBind: Record<string, any>;
        isTabMargin: boolean;
        tabMarginNum: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    handleType: {
        type: import('vue').PropType<"edit" | "desc">;
        validator: (value: string) => boolean;
        default: string;
    };
    isShowHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleSlot: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGoBackEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnSaveBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnCancelBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    isTabMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabMarginNum: {
        type: NumberConstructor;
        default: number;
    };
    footer: ObjectConstructor;
    title: StringConstructor;
    subTitle: StringConstructor;
    tabs: import('vue').PropType<import('./src/moduleForm').tabsProps[]>;
    submit: FunctionConstructor;
}>> & Readonly<{
    onValidateError?: ((...args: any[]) => any) | undefined;
    onBack?: ((...args: any[]) => any) | undefined;
    onTabsChange?: ((...args: any[]) => any) | undefined;
}>, {
    clearValidate: () => void;
    resetFormFields: () => void;
    updateFormFields: () => void;
    setSelectedTab: (key: any) => void;
    saveHandle: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    validateError: (...args: any[]) => void;
    back: (...args: any[]) => void;
    tabsChange: (...args: any[]) => void;
}, string, {
    handleType: "desc" | "edit";
    isShowHeader: boolean;
    titleSlot: boolean;
    isShowBack: boolean;
    isGoBackEvent: boolean;
    btnSaveBind: Record<string, any>;
    btnCancelBind: Record<string, any>;
    isTabMargin: boolean;
    tabMarginNum: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {}) => any>> & {
        title?(_: {}): any;
        extra?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TModuleForm;
