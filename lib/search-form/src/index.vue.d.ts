import { ColumnProps } from '../../pro-table/interface';
import { BreakPoint } from '../../grid/interface';
export interface ProTableProps {
    columns?: ColumnProps[];
    searchParam?: {
        [key: string]: any;
    };
    searchCol: number | Record<BreakPoint, number>;
    search: (params: any) => void;
    reset: (params: any) => void;
}
declare const _default: import('vue').DefineComponent<ProTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ProTableProps> & Readonly<{}>, {
    searchParam: {
        [key: string]: any;
    };
    columns: ColumnProps[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
