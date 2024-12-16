declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    moreCheckList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    popoverAttrsBind: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    getCheckList: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    moreCheckList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    popoverAttrsBind: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onGetCheckList?: ((...args: any[]) => any) | undefined;
}>, {
    moreCheckList: unknown[];
    popoverAttrsBind: Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
