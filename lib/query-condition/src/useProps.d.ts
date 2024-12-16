import { ExtractPropTypes } from 'vue';
export declare const queryProps: {
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
};
export type TQueryProps = ExtractPropTypes<typeof queryProps>;
