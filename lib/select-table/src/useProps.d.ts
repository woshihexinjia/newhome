import { PropType, ExtractPropTypes } from 'vue';
import { columnProps } from './selectTable';
export declare const selectTableProps: {
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
        type: PropType<columnProps[]>;
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
        type: PropType<(row: any, index: number) => boolean>;
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
        type: PropType<"" | "large" | "default" | "small">;
        default: string;
    };
    align: {
        type: PropType<"left" | "center" | "right">;
        default: string;
    };
    paginationSize: {
        type: PropType<"" | "large" | "default" | "small">;
        default: string;
    };
};
export type TSelectTableProps = ExtractPropTypes<typeof selectTableProps>;
