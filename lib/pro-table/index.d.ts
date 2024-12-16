declare const HProTable: ({
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./interface').ProTableProps> & Readonly<{
        onReset?: (() => any) | undefined;
        onSearch?: (() => any) | undefined;
        onDragSort?: ((args_0: {
            newIndex?: number;
            oldIndex?: number;
        }) => any) | undefined;
    }>, {
        element: import('vue').Ref<import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, {}, {}, {}, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }> | undefined, import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, {}, {}, {}, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }> | undefined>;
        tableData: import('vue').ComputedRef<any[]>;
        radio: import('vue').Ref<string, string>;
        pageable: import('vue').Ref<{
            pageNum: number;
            pageSize: number;
            total: number;
        }, {
            pageNum: number;
            pageSize: number;
            total: number;
        }>;
        searchParam: import('vue').Ref<{
            [key: string]: any;
        }, {
            [key: string]: any;
        }>;
        searchInitParam: import('vue').Ref<{
            [key: string]: any;
        }, {
            [key: string]: any;
        }>;
        isSelected: import('vue').Ref<boolean, boolean>;
        selectedList: import('vue').Ref<{
            [key: string]: any;
        }[], {
            [key: string]: any;
        }[]>;
        selectedListIds: import('vue').ComputedRef<string[]>;
        getTableList: () => Promise<void>;
        search: () => void;
        reset: () => void;
        handleSizeChange: (val: number) => void;
        handleCurrentChange: (val: number) => void;
        clearSelection: () => void;
        enumMap: import('vue').Ref<Map<string, {
            [key: string]: any;
        }[]> & Omit<Map<string, {
            [key: string]: any;
        }[]>, keyof Map<any, any>>, Map<string, {
            [key: string]: any;
        }[]> | (Map<string, {
            [key: string]: any;
        }[]> & Omit<Map<string, {
            [key: string]: any;
        }[]>, keyof Map<any, any>>)>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        reset: () => any;
        search: () => any;
        dragSort: (args_0: {
            newIndex?: number;
            oldIndex?: number;
        }) => any;
    }, import('vue').PublicProps, {
        columns: import('./interface').ColumnProps[];
        searchCol: number | Record<import('../grid/interface').BreakPoint, number>;
        pagination: boolean;
        border: boolean;
        rowKey: string;
        requestAuto: boolean;
        initParam: any;
        toolButton: ("refresh" | "setting" | "search")[] | boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./interface').ProTableProps> & Readonly<{
        onReset?: (() => any) | undefined;
        onSearch?: (() => any) | undefined;
        onDragSort?: ((args_0: {
            newIndex?: number;
            oldIndex?: number;
        }) => any) | undefined;
    }>, {
        element: import('vue').Ref<import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, {}, {}, {}, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }> | undefined, import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
                default: () => never[];
            };
            size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            width: (NumberConstructor | StringConstructor)[];
            height: (NumberConstructor | StringConstructor)[];
            maxHeight: (NumberConstructor | StringConstructor)[];
            fit: {
                type: BooleanConstructor;
                default: boolean;
            };
            stripe: BooleanConstructor;
            border: BooleanConstructor;
            rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
            rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
            rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
            cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
            cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
            headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
            headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
            headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
            headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (NumberConstructor | StringConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
            spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
            selectOnIndeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            indent: {
                type: NumberConstructor;
                default: number;
            };
            treeProps: {
                type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
                default: () => {
                    hasChildren: string;
                    children: string;
                    checkStrictly: boolean;
                };
            };
            lazy: BooleanConstructor;
            load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
            style: {
                type: import('vue').PropType<import('vue').CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import('vue').PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: BooleanConstructor;
            flexible: BooleanConstructor;
            showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
            appendFilterPanelTo: StringConstructor;
            scrollbarTabindex: {
                type: (NumberConstructor | StringConstructor)[];
                default: undefined;
            };
        }>> & {
            onScroll?: ((...args: any[]) => any) | undefined;
            onSelect?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onCurrent-change"?: ((...args: any[]) => any) | undefined;
            "onSelect-all"?: ((...args: any[]) => any) | undefined;
            "onSelection-change"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
            "onRow-click"?: ((...args: any[]) => any) | undefined;
            "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
            "onHeader-click"?: ((...args: any[]) => any) | undefined;
            "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
            "onSort-change"?: ((...args: any[]) => any) | undefined;
            "onFilter-change"?: ((...args: any[]) => any) | undefined;
            "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
        }, {
            ns: {
                namespace: import('vue').ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string) => string;
                m: (modifier?: string) => string;
                be: (blockSuffix?: string, element?: string) => string;
                em: (element?: string, modifier?: string) => string;
                bm: (blockSuffix?: string, modifier?: string) => string;
                bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            layout: import('element-plus/es/components/table/src/table-layout').default<any>;
            store: any;
            columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
            handleHeaderFooterMousewheel: (event: any, data: any) => void;
            handleMouseLeave: () => void;
            tableId: string;
            tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            isHidden: import('vue').Ref<boolean>;
            isEmpty: import('vue').ComputedRef<boolean>;
            renderExpanded: import('vue').Ref<null>;
            resizeProxyVisible: import('vue').Ref<boolean>;
            resizeState: import('vue').Ref<{
                width: null | number;
                height: null | number;
                headerHeight: null | number;
            }>;
            isGroup: import('vue').Ref<boolean>;
            bodyWidth: import('vue').ComputedRef<string>;
            tableBodyStyles: import('vue').ComputedRef<{
                width: string;
            }>;
            emptyBlockStyle: import('vue').ComputedRef<{
                width: string;
                height: string;
            } | null>;
            debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
            handleFixedMousewheel: (event: any, data: any) => void;
            setCurrentRow: (row: any) => void;
            getSelectionRows: () => any;
            toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
            clearSelection: () => void;
            clearFilter: (columnKeys?: string[]) => void;
            toggleAllSelection: () => void;
            toggleRowExpansion: (row: any, expanded?: boolean) => void;
            clearSort: () => void;
            doLayout: () => void;
            sort: (prop: string, order: string) => void;
            updateKeyChildren: (key: string, data: any[]) => void;
            t: import('element-plus').Translator;
            setDragVisible: (visible: boolean) => void;
            context: import('element-plus').Table<any>;
            computedSumText: import('vue').ComputedRef<string>;
            computedEmptyText: import('vue').ComputedRef<string>;
            tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
            scrollbarViewStyle: {
                display: string;
                verticalAlign: string;
            };
            scrollbarStyle: import('vue').ComputedRef<{
                height: string;
                maxHeight?: undefined;
            } | {
                maxHeight: string;
                height?: undefined;
            } | {
                height?: undefined;
                maxHeight?: undefined;
            }>;
            scrollBarRef: import('vue').Ref<any>;
            scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
            setScrollLeft: (left?: number) => void;
            setScrollTop: (top?: number) => void;
        }, {}, {}, {}, {
            data: any[];
            style: import('vue').CSSProperties;
            tableLayout: "fixed" | "auto";
            border: boolean;
            className: string;
            fit: boolean;
            lazy: boolean;
            scrollbarAlwaysOn: boolean;
            stripe: boolean;
            treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            flexible: boolean;
            scrollbarTabindex: string | number;
        }> | undefined>;
        tableData: import('vue').ComputedRef<any[]>;
        radio: import('vue').Ref<string, string>;
        pageable: import('vue').Ref<{
            pageNum: number;
            pageSize: number;
            total: number;
        }, {
            pageNum: number;
            pageSize: number;
            total: number;
        }>;
        searchParam: import('vue').Ref<{
            [key: string]: any;
        }, {
            [key: string]: any;
        }>;
        searchInitParam: import('vue').Ref<{
            [key: string]: any;
        }, {
            [key: string]: any;
        }>;
        isSelected: import('vue').Ref<boolean, boolean>;
        selectedList: import('vue').Ref<{
            [key: string]: any;
        }[], {
            [key: string]: any;
        }[]>;
        selectedListIds: import('vue').ComputedRef<string[]>;
        getTableList: () => Promise<void>;
        search: () => void;
        reset: () => void;
        handleSizeChange: (val: number) => void;
        handleCurrentChange: (val: number) => void;
        clearSelection: () => void;
        enumMap: import('vue').Ref<Map<string, {
            [key: string]: any;
        }[]> & Omit<Map<string, {
            [key: string]: any;
        }[]>, keyof Map<any, any>>, Map<string, {
            [key: string]: any;
        }[]> | (Map<string, {
            [key: string]: any;
        }[]> & Omit<Map<string, {
            [key: string]: any;
        }[]>, keyof Map<any, any>>)>;
    }, {}, {}, {}, {
        columns: import('./interface').ColumnProps[];
        searchCol: number | Record<import('../grid/interface').BreakPoint, number>;
        pagination: boolean;
        border: boolean;
        rowKey: string;
        requestAuto: boolean;
        initParam: any;
        toolButton: ("refresh" | "setting" | "search")[] | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./interface').ProTableProps> & Readonly<{
    onReset?: (() => any) | undefined;
    onSearch?: (() => any) | undefined;
    onDragSort?: ((args_0: {
        newIndex?: number;
        oldIndex?: number;
    }) => any) | undefined;
}>, {
    element: import('vue').Ref<import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        data: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
            default: () => never[];
        };
        size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
        rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
        cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
        cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
        headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
        headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
        headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
        headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
        spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
        style: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import('vue').PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import('vue').ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string) => string;
            m: (modifier?: string) => string;
            be: (blockSuffix?: string, element?: string) => string;
            em: (element?: string, modifier?: string) => string;
            bm: (blockSuffix?: string, modifier?: string) => string;
            bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import('element-plus/es/components/table/src/table-layout').default<any>;
        store: any;
        columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import('vue').Ref<boolean>;
        isEmpty: import('vue').ComputedRef<boolean>;
        renderExpanded: import('vue').Ref<null>;
        resizeProxyVisible: import('vue').Ref<boolean>;
        resizeState: import('vue').Ref<{
            width: null | number;
            height: null | number;
            headerHeight: null | number;
        }>;
        isGroup: import('vue').Ref<boolean>;
        bodyWidth: import('vue').ComputedRef<string>;
        tableBodyStyles: import('vue').ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import('vue').ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import('element-plus').Translator;
        setDragVisible: (visible: boolean) => void;
        context: import('element-plus').Table<any>;
        computedSumText: import('vue').ComputedRef<string>;
        computedEmptyText: import('vue').ComputedRef<string>;
        tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollbarStyle: import('vue').ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import('vue').Ref<any>;
        scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
        setScrollLeft: (left?: number) => void;
        setScrollTop: (top?: number) => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
        data: any[];
        style: import('vue').CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        data: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
            default: () => never[];
        };
        size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
        rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
        cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
        cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
        headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
        headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
        headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
        headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
        spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
        style: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import('vue').PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import('vue').ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string) => string;
            m: (modifier?: string) => string;
            be: (blockSuffix?: string, element?: string) => string;
            em: (element?: string, modifier?: string) => string;
            bm: (blockSuffix?: string, modifier?: string) => string;
            bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import('element-plus/es/components/table/src/table-layout').default<any>;
        store: any;
        columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import('vue').Ref<boolean>;
        isEmpty: import('vue').ComputedRef<boolean>;
        renderExpanded: import('vue').Ref<null>;
        resizeProxyVisible: import('vue').Ref<boolean>;
        resizeState: import('vue').Ref<{
            width: null | number;
            height: null | number;
            headerHeight: null | number;
        }>;
        isGroup: import('vue').Ref<boolean>;
        bodyWidth: import('vue').ComputedRef<string>;
        tableBodyStyles: import('vue').ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import('vue').ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import('element-plus').Translator;
        setDragVisible: (visible: boolean) => void;
        context: import('element-plus').Table<any>;
        computedSumText: import('vue').ComputedRef<string>;
        computedEmptyText: import('vue').ComputedRef<string>;
        tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollbarStyle: import('vue').ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import('vue').Ref<any>;
        scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
        setScrollLeft: (left?: number) => void;
        setScrollTop: (top?: number) => void;
    }, {}, {}, {}, {
        data: any[];
        style: import('vue').CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }> | undefined, import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        data: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
            default: () => never[];
        };
        size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
        rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
        cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
        cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
        headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
        headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
        headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
        headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
        spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
        style: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import('vue').PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import('vue').ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string) => string;
            m: (modifier?: string) => string;
            be: (blockSuffix?: string, element?: string) => string;
            em: (element?: string, modifier?: string) => string;
            bm: (blockSuffix?: string, modifier?: string) => string;
            bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import('element-plus/es/components/table/src/table-layout').default<any>;
        store: any;
        columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import('vue').Ref<boolean>;
        isEmpty: import('vue').ComputedRef<boolean>;
        renderExpanded: import('vue').Ref<null>;
        resizeProxyVisible: import('vue').Ref<boolean>;
        resizeState: import('vue').Ref<{
            width: null | number;
            height: null | number;
            headerHeight: null | number;
        }>;
        isGroup: import('vue').Ref<boolean>;
        bodyWidth: import('vue').ComputedRef<string>;
        tableBodyStyles: import('vue').ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import('vue').ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import('element-plus').Translator;
        setDragVisible: (visible: boolean) => void;
        context: import('element-plus').Table<any>;
        computedSumText: import('vue').ComputedRef<string>;
        computedEmptyText: import('vue').ComputedRef<string>;
        tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollbarStyle: import('vue').ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import('vue').Ref<any>;
        scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
        setScrollLeft: (left?: number) => void;
        setScrollTop: (top?: number) => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("scroll" | "select" | "current-change" | "select-all" | "expand-change" | "selection-change" | "cell-mouse-enter" | "cell-mouse-leave" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "sort-change" | "filter-change" | "header-dragend")[], import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
        data: any[];
        style: import('vue').CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        data: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').DefaultRow[]>;
            default: () => never[];
        };
        size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        maxHeight: (NumberConstructor | StringConstructor)[];
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        stripe: BooleanConstructor;
        border: BooleanConstructor;
        rowKey: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowKey"]>;
        showHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSummary: BooleanConstructor;
        sumText: StringConstructor;
        summaryMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["summaryMethod"]>;
        rowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["rowStyle"]>;
        cellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellClassName"]>;
        cellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["cellStyle"]>;
        headerRowClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowClassName"]>;
        headerRowStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerRowStyle"]>;
        headerCellClassName: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellClassName"]>;
        headerCellStyle: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["headerCellStyle"]>;
        highlightCurrentRow: BooleanConstructor;
        currentRowKey: (NumberConstructor | StringConstructor)[];
        emptyText: StringConstructor;
        expandRowKeys: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["expandRowKeys"]>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["defaultSort"]>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["tooltipOptions"]>;
        spanMethod: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["spanMethod"]>;
        selectOnIndeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        indent: {
            type: NumberConstructor;
            default: number;
        };
        treeProps: {
            type: import('vue').PropType<import('element-plus/es/components/table/src/table/defaults').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["treeProps"]>;
            default: () => {
                hasChildren: string;
                children: string;
                checkStrictly: boolean;
            };
        };
        lazy: BooleanConstructor;
        load: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["load"]>;
        style: {
            type: import('vue').PropType<import('vue').CSSProperties>;
            default: () => {};
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        tableLayout: {
            type: import('vue').PropType<"fixed" | "auto">;
            default: string;
        };
        scrollbarAlwaysOn: BooleanConstructor;
        flexible: BooleanConstructor;
        showOverflowTooltip: import('vue').PropType<import('element-plus').TableProps<import('element-plus/es/components/table/src/table/defaults').DefaultRow>["showOverflowTooltip"]>;
        appendFilterPanelTo: StringConstructor;
        scrollbarTabindex: {
            type: (NumberConstructor | StringConstructor)[];
            default: undefined;
        };
    }>> & {
        onScroll?: ((...args: any[]) => any) | undefined;
        onSelect?: ((...args: any[]) => any) | undefined;
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
        "onSelection-change"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
        "onRow-click"?: ((...args: any[]) => any) | undefined;
        "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
        "onHeader-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onSort-change"?: ((...args: any[]) => any) | undefined;
        "onFilter-change"?: ((...args: any[]) => any) | undefined;
        "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import('vue').ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string) => string;
            m: (modifier?: string) => string;
            be: (blockSuffix?: string, element?: string) => string;
            em: (element?: string, modifier?: string) => string;
            bm: (blockSuffix?: string, modifier?: string) => string;
            bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        layout: import('element-plus/es/components/table/src/table-layout').default<any>;
        store: any;
        columns: import('vue').ComputedRef<import('element-plus').TableColumnCtx<unknown>>;
        handleHeaderFooterMousewheel: (event: any, data: any) => void;
        handleMouseLeave: () => void;
        tableId: string;
        tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
        isHidden: import('vue').Ref<boolean>;
        isEmpty: import('vue').ComputedRef<boolean>;
        renderExpanded: import('vue').Ref<null>;
        resizeProxyVisible: import('vue').Ref<boolean>;
        resizeState: import('vue').Ref<{
            width: null | number;
            height: null | number;
            headerHeight: null | number;
        }>;
        isGroup: import('vue').Ref<boolean>;
        bodyWidth: import('vue').ComputedRef<string>;
        tableBodyStyles: import('vue').ComputedRef<{
            width: string;
        }>;
        emptyBlockStyle: import('vue').ComputedRef<{
            width: string;
            height: string;
        } | null>;
        debouncedUpdateLayout: import('lodash').DebouncedFunc<() => void>;
        handleFixedMousewheel: (event: any, data: any) => void;
        setCurrentRow: (row: any) => void;
        getSelectionRows: () => any;
        toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
        clearSelection: () => void;
        clearFilter: (columnKeys?: string[]) => void;
        toggleAllSelection: () => void;
        toggleRowExpansion: (row: any, expanded?: boolean) => void;
        clearSort: () => void;
        doLayout: () => void;
        sort: (prop: string, order: string) => void;
        updateKeyChildren: (key: string, data: any[]) => void;
        t: import('element-plus').Translator;
        setDragVisible: (visible: boolean) => void;
        context: import('element-plus').Table<any>;
        computedSumText: import('vue').ComputedRef<string>;
        computedEmptyText: import('vue').ComputedRef<string>;
        tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
        scrollbarViewStyle: {
            display: string;
            verticalAlign: string;
        };
        scrollbarStyle: import('vue').ComputedRef<{
            height: string;
            maxHeight?: undefined;
        } | {
            maxHeight: string;
            height?: undefined;
        } | {
            height?: undefined;
            maxHeight?: undefined;
        }>;
        scrollBarRef: import('vue').Ref<any>;
        scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
        setScrollLeft: (left?: number) => void;
        setScrollTop: (top?: number) => void;
    }, {}, {}, {}, {
        data: any[];
        style: import('vue').CSSProperties;
        tableLayout: "fixed" | "auto";
        border: boolean;
        className: string;
        fit: boolean;
        lazy: boolean;
        scrollbarAlwaysOn: boolean;
        stripe: boolean;
        treeProps: import('element-plus/es/components/table/src/table/defaults').TreeProps | undefined;
        showHeader: boolean;
        showSummary: boolean;
        highlightCurrentRow: boolean;
        defaultExpandAll: boolean;
        selectOnIndeterminate: boolean;
        indent: number;
        flexible: boolean;
        scrollbarTabindex: string | number;
    }> | undefined>;
    tableData: import('vue').ComputedRef<any[]>;
    radio: import('vue').Ref<string, string>;
    pageable: import('vue').Ref<{
        pageNum: number;
        pageSize: number;
        total: number;
    }, {
        pageNum: number;
        pageSize: number;
        total: number;
    }>;
    searchParam: import('vue').Ref<{
        [key: string]: any;
    }, {
        [key: string]: any;
    }>;
    searchInitParam: import('vue').Ref<{
        [key: string]: any;
    }, {
        [key: string]: any;
    }>;
    isSelected: import('vue').Ref<boolean, boolean>;
    selectedList: import('vue').Ref<{
        [key: string]: any;
    }[], {
        [key: string]: any;
    }[]>;
    selectedListIds: import('vue').ComputedRef<string[]>;
    getTableList: () => Promise<void>;
    search: () => void;
    reset: () => void;
    handleSizeChange: (val: number) => void;
    handleCurrentChange: (val: number) => void;
    clearSelection: () => void;
    enumMap: import('vue').Ref<Map<string, {
        [key: string]: any;
    }[]> & Omit<Map<string, {
        [key: string]: any;
    }[]>, keyof Map<any, any>>, Map<string, {
        [key: string]: any;
    }[]> | (Map<string, {
        [key: string]: any;
    }[]> & Omit<Map<string, {
        [key: string]: any;
    }[]>, keyof Map<any, any>>)>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: () => any;
    search: () => any;
    dragSort: (args_0: {
        newIndex?: number;
        oldIndex?: number;
    }) => any;
}, string, {
    columns: import('./interface').ColumnProps[];
    searchCol: number | Record<import('../grid/interface').BreakPoint, number>;
    pagination: boolean;
    border: boolean;
    rowKey: string;
    requestAuto: boolean;
    initParam: any;
    toolButton: ("refresh" | "setting" | "search")[] | boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Partial<Record<"expand", (_: any) => any>> & Partial<Record<string, (_: any) => any>> & {
        tableHeader?(_: {
            selectedList: {
                [key: string]: any;
            }[];
            selectedListIds: string[];
            isSelected: boolean;
        }): any;
        toolButton?(_: {}): any;
        default?(_: {}): any;
        append?(_: {}): any;
        empty?(_: {}): any;
        pagination?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export default HProTable;
