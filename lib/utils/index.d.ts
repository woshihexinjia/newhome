import { FieldNamesProps } from '../pro-table/interface';
type Func = (...args: any[]) => any;
/**
 * 防抖函数
 * @param { Function } func 函数
 * @param { Number } delay 防抖时间
 * @param { Boolean } immediate 是否立即执行
 * @param { Function } resultCallback
 */
export declare function debounce(func: Func, delay?: number, immediate?: boolean, resultCallback?: Func): {
    (this: unknown, ...args: any[]): Promise<unknown>;
    cancel(): void;
};
/**
 * 节流函数
 * @param { Function } func
 * @param { Boolean } interval
 * @param { Object } options
 * leading:初始 trailing:结尾
 */
export declare function throttle(func: Func, interval: number, options?: {
    leading: boolean;
    trailing: boolean;
}): {
    (this: unknown, ...args: any[]): void;
    cancel(): void;
};
/**
 * 驼峰转换下划线
 * @param { String } name
 */
export declare function toLine(name: string): string;
export declare function formatNumber(value: number | string, precision?: number, separator?: string, decimal?: string, prefix?: string, suffix?: string): string;
/**
 * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
 * @param {String} prop 当前 prop
 * @returns {String}
 * */
export declare function handleProp(prop: string): string;
/**
 * @description 生成唯一 uuid
 * @returns {String}
 */
export declare function generateUUID(): string;
/**
 * @description:  是否为数组
 */
export declare function isArray(val: any): val is Array<any>;
/**
 * @description 处理 prop 为多级嵌套的情况，返回的数据 (列如: prop: user.name)
 * @param {Object} row 当前行数据
 * @param {String} prop 当前 prop
 * @returns {*}
 * */
export declare function handleRowAccordingToProp(row: {
    [key: string]: any;
}, prop: string): any;
/**
 * @description 处理 ProTable 值为数组 || 无数据
 * @param {*} callValue 需要处理的值
 * @returns {String}
 * */
export declare function formatValue(callValue: any): any;
/**
 * @description 递归查找 callValue 对应的 enum 值
 * */
export declare function findItemNested(enumData: any, callValue: any, value: string, children: string): any;
/**
 * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
 * @param {String} callValue 当前单元格值
 * @param {Array} enumData 字典列表
 * @param {Array} fieldNames label && value && children 的 key 值
 * @param {String} type 过滤类型（目前只有 tag）
 * @returns {String}
 * */
export declare function filterEnum(callValue: any, enumData?: any, fieldNames?: FieldNamesProps, type?: "tag"): any;
export {};
