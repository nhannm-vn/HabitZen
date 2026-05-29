export declare class PaginationQueryDto {
    page?: number;
    limit?: number;
}
export declare function paginate<T>(items: T[], page?: number, limit?: number): {
    items: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};
