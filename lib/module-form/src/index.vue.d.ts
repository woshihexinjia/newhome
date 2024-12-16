import { nextTick, PropType } from 'vue';
import { tabsProps } from './moduleForm';
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {}) => any>> & {
        title?(_: {}): any;
        extra?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        tForm: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                formOpts: Record<string, any>;
                titleBold: boolean;
            }> & Omit<{
                readonly formOpts: Record<string, any>;
                readonly titleBold: boolean;
                readonly onHandleEvent?: ((...args: any[]) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "formOpts" | "titleBold">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "handleEvent", ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                formOpts: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                titleBold: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onHandleEvent?: ((...args: any[]) => any) | undefined;
            }>, {
                getChildRef: (index: string | number) => any;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                handleEvent: (...args: any[]) => void;
            }, string, {
                formOpts: Record<string, any>;
                titleBold: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            formOpts: Record<string, any>;
            titleBold: boolean;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            formOpts: {
                type: ObjectConstructor;
                default: () => {};
            };
            titleBold: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onHandleEvent?: ((...args: any[]) => any) | undefined;
        }>, "getChildRef" | ("formOpts" | "titleBold")> & import('vue').ShallowUnwrapRef<{
            getChildRef: (index: string | number) => any;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Partial<Record<any, (_: {}) => any>> & Partial<Record<any, (_: {}) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    handleType: {
        type: PropType<"edit" | "desc">;
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
    tabs: PropType<tabsProps[]>;
    submit: FunctionConstructor;
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
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    handleType: {
        type: PropType<"edit" | "desc">;
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
    tabs: PropType<tabsProps[]>;
    submit: FunctionConstructor;
}>> & Readonly<{
    onValidateError?: ((...args: any[]) => any) | undefined;
    onBack?: ((...args: any[]) => any) | undefined;
    onTabsChange?: ((...args: any[]) => any) | undefined;
}>, {
    handleType: "desc" | "edit";
    isShowHeader: boolean;
    titleSlot: boolean;
    isShowBack: boolean;
    isGoBackEvent: boolean;
    btnSaveBind: Record<string, any>;
    btnCancelBind: Record<string, any>;
    isTabMargin: boolean;
    tabMarginNum: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
