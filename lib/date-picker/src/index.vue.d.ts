import { PropType } from 'vue';
declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {
        DatePicker: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | DateConstructor | StringConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    state: {
        dateOptions: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (ArrayConstructor | DateConstructor | StringConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    type: "datetimerange" | "daterange" | "monthrange" | "date" | "week" | "month" | "year" | "dates" | "months" | "years" | "datetime";
    plusTime: boolean;
    isPickerOptions: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
