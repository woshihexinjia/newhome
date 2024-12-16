import { PropType } from 'vue';
declare function __VLS_template(): {
    slots: Partial<Record<any, (_: {
        scope: any;
    }) => any>> & Partial<Record<any, (_: {
        scope: any;
    }) => any>> & Partial<Record<any, (_: {}) => any>> & Partial<Record<any, (_: {}) => any>>;
    refs: {
        tform: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly disabled: boolean;
                readonly inline: boolean;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
                readonly inlineMessage: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
                readonly labelSuffix: string;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly statusIcon: boolean;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
            }> & Omit<{
                readonly inline: boolean;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelSuffix: string;
                readonly inlineMessage: boolean;
                readonly statusIcon: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
                readonly disabled: boolean;
                readonly size?: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown> | undefined;
                readonly model?: Record<string, any> | undefined;
                readonly rules?: Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>> | undefined;
                readonly scrollIntoViewOptions?: import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
                onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "inline" | "labelPosition" | "requireAsteriskPosition" | "labelWidth" | "labelSuffix" | "inlineMessage" | "statusIcon" | "showMessage" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError" | "disabled">;
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
            $emit: (event: "validate", prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly model: ObjectConstructor;
                readonly rules: {
                    readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
                readonly labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelSuffix: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly inline: BooleanConstructor;
                readonly inlineMessage: BooleanConstructor;
                readonly statusIcon: BooleanConstructor;
                readonly showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideRequiredAsterisk: BooleanConstructor;
                readonly scrollToError: BooleanConstructor;
                readonly scrollIntoViewOptions: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
            }>> & {
                onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
            }, {
                validate: (callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
                validateField: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>, callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
                resetFields: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>) => void;
                clearValidate: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>) => void;
                scrollToField: (prop: import('element-plus').FormItemProp) => void;
                fields: import('element-plus').FormItemContext[];
            }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                validate: (prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => void;
            }, string, {
                readonly disabled: boolean;
                readonly inline: boolean;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
                readonly inlineMessage: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
                readonly labelSuffix: string;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly statusIcon: boolean;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
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
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly disabled: boolean;
            readonly inline: boolean;
            readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, "inline" | "labelPosition" | "requireAsteriskPosition" | "labelWidth" | "labelSuffix" | "inlineMessage" | "statusIcon" | "showMessage" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError" | "disabled" | "validate" | "validateField" | "resetFields" | "clearValidate" | "scrollToField" | "fields"> & import('vue').ShallowUnwrapRef<{
            validate: (callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
            validateField: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>, callback?: import('element-plus').FormValidateCallback) => import('element-plus').FormValidationResult;
            resetFields: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>) => void;
            clearValidate: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp>) => void;
            scrollToField: (prop: import('element-plus').FormItemProp) => void;
            fields: import('element-plus').FormItemContext[];
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<1 | 2 | 3 | 4 | 5 | 6>;
        validator: (value: number) => boolean;
        default: number;
    };
    labelPosition: {
        type: PropType<"left" | "right" | "top">;
        default: string;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, any, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    handleEvent: (...args: any[]) => void;
    getRefs: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<1 | 2 | 3 | 4 | 5 | 6>;
        validator: (value: number) => boolean;
        default: number;
    };
    labelPosition: {
        type: PropType<"left" | "right" | "top">;
        default: string;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onHandleEvent?: ((...args: any[]) => any) | undefined;
    onGetRefs?: ((...args: any[]) => any) | undefined;
}>, {
    labelPosition: "top" | "left" | "right";
    widthSize: 1 | 2 | 3 | 4 | 5 | 6;
    formOpts: Record<string, any>;
    isTrim: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
