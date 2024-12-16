interface Pageable {
    pageNum: number;
    pageSize: number;
    total: number;
}
type enms = "large" | "default" | "small";
interface PaginationProps {
    pageable: Pageable;
    assemblySize?: enms;
    handleSizeChange: (size: number) => void;
    handleCurrentChange: (currentPage: number) => void;
}
declare const _default: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
