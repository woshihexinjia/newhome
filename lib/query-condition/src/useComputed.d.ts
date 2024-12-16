export declare function useComputed(): {
    compChildName: import('vue').ComputedRef<(opt: any) => "el-option" | "el-radio" | "el-checkbox" | undefined>;
    selectListType: import('vue').ComputedRef<(opt: any) => any>;
    compChildLabel: import('vue').ComputedRef<(opt: {
        type: any;
        arrLabel: any;
    }, value: {
        [x: string]: any;
        value: any;
    }) => any>;
    compChildValue: import('vue').ComputedRef<(opt: {
        type: any;
        arrKey: any;
    }, value: {
        [x: string]: any;
        value: any;
    }, key: any) => any>;
    compChildShowLabel: import('vue').ComputedRef<(opt: {
        type: any;
        arrLabel: any;
    }, value: {
        [x: string]: any;
        label: any;
    }) => any>;
    getPlaceholder: (row: any) => any;
    getColLength: () => number;
};
