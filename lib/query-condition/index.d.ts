declare const TQueryCondition: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        opts: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        isFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
        isDropDownSelectMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreCheckList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        popoverAttrs: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        onGetCheckList?: ((...args: any[]) => any) | undefined;
        onHandleEvent?: ((...args: any[]) => any) | undefined;
    }>, {
        queryState: {
            form: any;
        };
        props: {
            readonly reset: boolean;
            readonly labelWidth: string;
            readonly loading: boolean;
            readonly moreCheckList: unknown[];
            readonly opts: Record<string, any>;
            readonly btnCheckBind: Record<string, any>;
            readonly btnResetBind: Record<string, any>;
            readonly boolEnter: boolean;
            readonly isShowOpen: boolean;
            readonly isExpansion: boolean;
            readonly maxVisibleRows: number;
            readonly packUpTxt: string;
            readonly unfoldTxt: string;
            readonly isFooter: boolean;
            readonly configChangedReset: boolean;
            readonly isShowWidthSize: boolean;
            readonly widthSize: number;
            readonly isDropDownSelectMore: boolean;
            readonly popoverAttrs: Record<string, any>;
        };
        colLength: import('vue').Ref<number, number>;
        resetData: () => void;
        resetHandle: () => void;
        checkHandle: (flagText?: any) => void;
        handleEvent: ({ isChange, type, val }: {
            isChange?: boolean;
            type: string;
            val: any;
        }, dataIndex?: string) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        reset: (...args: any[]) => void;
        submit: (...args: any[]) => void;
        getCheckList: (...args: any[]) => void;
        handleEvent: (...args: any[]) => void;
    }, import('vue').PublicProps, {
        reset: boolean;
        labelWidth: string;
        loading: boolean;
        moreCheckList: unknown[];
        opts: Record<string, any>;
        btnCheckBind: Record<string, any>;
        btnResetBind: Record<string, any>;
        boolEnter: boolean;
        isShowOpen: boolean;
        isExpansion: boolean;
        maxVisibleRows: number;
        packUpTxt: string;
        unfoldTxt: string;
        isFooter: boolean;
        configChangedReset: boolean;
        isShowWidthSize: boolean;
        widthSize: number;
        isDropDownSelectMore: boolean;
        popoverAttrs: Record<string, any>;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        opts: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        isFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
        isDropDownSelectMore: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreCheckList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        popoverAttrs: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        onGetCheckList?: ((...args: any[]) => any) | undefined;
        onHandleEvent?: ((...args: any[]) => any) | undefined;
    }>, {
        queryState: {
            form: any;
        };
        props: {
            readonly reset: boolean;
            readonly labelWidth: string;
            readonly loading: boolean;
            readonly moreCheckList: unknown[];
            readonly opts: Record<string, any>;
            readonly btnCheckBind: Record<string, any>;
            readonly btnResetBind: Record<string, any>;
            readonly boolEnter: boolean;
            readonly isShowOpen: boolean;
            readonly isExpansion: boolean;
            readonly maxVisibleRows: number;
            readonly packUpTxt: string;
            readonly unfoldTxt: string;
            readonly isFooter: boolean;
            readonly configChangedReset: boolean;
            readonly isShowWidthSize: boolean;
            readonly widthSize: number;
            readonly isDropDownSelectMore: boolean;
            readonly popoverAttrs: Record<string, any>;
        };
        colLength: import('vue').Ref<number, number>;
        resetData: () => void;
        resetHandle: () => void;
        checkHandle: (flagText?: any) => void;
        handleEvent: ({ isChange, type, val }: {
            isChange?: boolean;
            type: string;
            val: any;
        }, dataIndex?: string) => void;
    }, {}, {}, {}, {
        reset: boolean;
        labelWidth: string;
        loading: boolean;
        moreCheckList: unknown[];
        opts: Record<string, any>;
        btnCheckBind: Record<string, any>;
        btnResetBind: Record<string, any>;
        boolEnter: boolean;
        isShowOpen: boolean;
        isExpansion: boolean;
        maxVisibleRows: number;
        packUpTxt: string;
        unfoldTxt: string;
        isFooter: boolean;
        configChangedReset: boolean;
        isShowWidthSize: boolean;
        widthSize: number;
        isDropDownSelectMore: boolean;
        popoverAttrs: Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    opts: {
        type: ObjectConstructor;
        required: boolean;
        default: () => {};
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    btnCheckBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnResetBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    boolEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpansion: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxVisibleRows: {
        type: NumberConstructor;
        default: number;
    };
    packUpTxt: {
        type: StringConstructor;
        default: string;
    };
    unfoldTxt: {
        type: StringConstructor;
        default: string;
    };
    isFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    configChangedReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowWidthSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    widthSize: {
        type: NumberConstructor;
        default: number;
    };
    isDropDownSelectMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreCheckList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    popoverAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    onGetCheckList?: ((...args: any[]) => any) | undefined;
    onHandleEvent?: ((...args: any[]) => any) | undefined;
}>, {
    queryState: {
        form: any;
    };
    props: {
        readonly reset: boolean;
        readonly labelWidth: string;
        readonly loading: boolean;
        readonly moreCheckList: unknown[];
        readonly opts: Record<string, any>;
        readonly btnCheckBind: Record<string, any>;
        readonly btnResetBind: Record<string, any>;
        readonly boolEnter: boolean;
        readonly isShowOpen: boolean;
        readonly isExpansion: boolean;
        readonly maxVisibleRows: number;
        readonly packUpTxt: string;
        readonly unfoldTxt: string;
        readonly isFooter: boolean;
        readonly configChangedReset: boolean;
        readonly isShowWidthSize: boolean;
        readonly widthSize: number;
        readonly isDropDownSelectMore: boolean;
        readonly popoverAttrs: Record<string, any>;
    };
    colLength: import('vue').Ref<number, number>;
    resetData: () => void;
    resetHandle: () => void;
    checkHandle: (flagText?: any) => void;
    handleEvent: ({ isChange, type, val }: {
        isChange?: boolean;
        type: string;
        val: any;
    }, dataIndex?: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: (...args: any[]) => void;
    submit: (...args: any[]) => void;
    getCheckList: (...args: any[]) => void;
    handleEvent: (...args: any[]) => void;
}, string, {
    reset: boolean;
    labelWidth: string;
    loading: boolean;
    moreCheckList: unknown[];
    opts: Record<string, any>;
    btnCheckBind: Record<string, any>;
    btnResetBind: Record<string, any>;
    boolEnter: boolean;
    isShowOpen: boolean;
    isExpansion: boolean;
    maxVisibleRows: number;
    packUpTxt: string;
    unfoldTxt: string;
    isFooter: boolean;
    configChangedReset: boolean;
    isShowWidthSize: boolean;
    widthSize: number;
    isDropDownSelectMore: boolean;
    popoverAttrs: Record<string, any>;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<any, (_: {
        param: any;
        scope: any;
    }) => any>> & {
        footerBtn?(_: {}): any;
        querybar?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default TQueryCondition;
