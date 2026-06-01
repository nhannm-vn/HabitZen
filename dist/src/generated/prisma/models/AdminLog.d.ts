import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminLogPayload>;
export type AggregateAdminLog = {
    _count: AdminLogCountAggregateOutputType | null;
    _min: AdminLogMinAggregateOutputType | null;
    _max: AdminLogMaxAggregateOutputType | null;
};
export type AdminLogMinAggregateOutputType = {
    id: string | null;
    adminId: string | null;
    action: string | null;
    targetType: string | null;
    targetId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type AdminLogMaxAggregateOutputType = {
    id: string | null;
    adminId: string | null;
    action: string | null;
    targetType: string | null;
    targetId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type AdminLogCountAggregateOutputType = {
    id: number;
    adminId: number;
    action: number;
    targetType: number;
    targetId: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type AdminLogMinAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type AdminLogMaxAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type AdminLogCountAggregateInputType = {
    id?: true;
    adminId?: true;
    action?: true;
    targetType?: true;
    targetId?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type AdminLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminLogWhereInput;
    orderBy?: Prisma.AdminLogOrderByWithRelationInput | Prisma.AdminLogOrderByWithRelationInput[];
    cursor?: Prisma.AdminLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminLogCountAggregateInputType;
    _min?: AdminLogMinAggregateInputType;
    _max?: AdminLogMaxAggregateInputType;
};
export type GetAdminLogAggregateType<T extends AdminLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminLog[P]> : Prisma.GetScalarType<T[P], AggregateAdminLog[P]>;
};
export type AdminLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminLogWhereInput;
    orderBy?: Prisma.AdminLogOrderByWithAggregationInput | Prisma.AdminLogOrderByWithAggregationInput[];
    by: Prisma.AdminLogScalarFieldEnum[] | Prisma.AdminLogScalarFieldEnum;
    having?: Prisma.AdminLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminLogCountAggregateInputType | true;
    _min?: AdminLogMinAggregateInputType;
    _max?: AdminLogMaxAggregateInputType;
};
export type AdminLogGroupByOutputType = {
    id: string;
    adminId: string;
    action: string;
    targetType: string | null;
    targetId: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: AdminLogCountAggregateOutputType | null;
    _min: AdminLogMinAggregateOutputType | null;
    _max: AdminLogMaxAggregateOutputType | null;
};
export type GetAdminLogGroupByPayload<T extends AdminLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminLogGroupByOutputType[P]>;
}>>;
export type AdminLogWhereInput = {
    AND?: Prisma.AdminLogWhereInput | Prisma.AdminLogWhereInput[];
    OR?: Prisma.AdminLogWhereInput[];
    NOT?: Prisma.AdminLogWhereInput | Prisma.AdminLogWhereInput[];
    id?: Prisma.UuidFilter<"AdminLog"> | string;
    adminId?: Prisma.UuidFilter<"AdminLog"> | string;
    action?: Prisma.StringFilter<"AdminLog"> | string;
    targetType?: Prisma.StringNullableFilter<"AdminLog"> | string | null;
    targetId?: Prisma.UuidNullableFilter<"AdminLog"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"AdminLog">;
    createdAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminLog"> | Date | string | null;
    admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AdminLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin?: Prisma.UserOrderByWithRelationInput;
};
export type AdminLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AdminLogWhereInput | Prisma.AdminLogWhereInput[];
    OR?: Prisma.AdminLogWhereInput[];
    NOT?: Prisma.AdminLogWhereInput | Prisma.AdminLogWhereInput[];
    adminId?: Prisma.UuidFilter<"AdminLog"> | string;
    action?: Prisma.StringFilter<"AdminLog"> | string;
    targetType?: Prisma.StringNullableFilter<"AdminLog"> | string | null;
    targetId?: Prisma.UuidNullableFilter<"AdminLog"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"AdminLog">;
    createdAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminLog"> | Date | string | null;
    admin?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AdminLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AdminLogCountOrderByAggregateInput;
    _max?: Prisma.AdminLogMaxOrderByAggregateInput;
    _min?: Prisma.AdminLogMinOrderByAggregateInput;
};
export type AdminLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminLogScalarWhereWithAggregatesInput | Prisma.AdminLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminLogScalarWhereWithAggregatesInput | Prisma.AdminLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AdminLog"> | string;
    adminId?: Prisma.UuidWithAggregatesFilter<"AdminLog"> | string;
    action?: Prisma.StringWithAggregatesFilter<"AdminLog"> | string;
    targetType?: Prisma.StringNullableWithAggregatesFilter<"AdminLog"> | string | null;
    targetId?: Prisma.UuidNullableWithAggregatesFilter<"AdminLog"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"AdminLog">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminLog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdminLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AdminLog"> | Date | string | null;
};
export type AdminLogCreateInput = {
    id?: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    admin: Prisma.UserCreateNestedOneWithoutAdminLogsInput;
};
export type AdminLogUncheckedCreateInput = {
    id?: string;
    adminId: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AdminLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admin?: Prisma.UserUpdateOneRequiredWithoutAdminLogsNestedInput;
};
export type AdminLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogCreateManyInput = {
    id?: string;
    adminId: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AdminLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogListRelationFilter = {
    every?: Prisma.AdminLogWhereInput;
    some?: Prisma.AdminLogWhereInput;
    none?: Prisma.AdminLogWhereInput;
};
export type AdminLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AdminLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AdminLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    targetType?: Prisma.SortOrder;
    targetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type AdminLogCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput> | Prisma.AdminLogCreateWithoutAdminInput[] | Prisma.AdminLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogCreateOrConnectWithoutAdminInput | Prisma.AdminLogCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AdminLogCreateManyAdminInputEnvelope;
    connect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
};
export type AdminLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput> | Prisma.AdminLogCreateWithoutAdminInput[] | Prisma.AdminLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogCreateOrConnectWithoutAdminInput | Prisma.AdminLogCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.AdminLogCreateManyAdminInputEnvelope;
    connect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
};
export type AdminLogUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput> | Prisma.AdminLogCreateWithoutAdminInput[] | Prisma.AdminLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogCreateOrConnectWithoutAdminInput | Prisma.AdminLogCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AdminLogUpsertWithWhereUniqueWithoutAdminInput | Prisma.AdminLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AdminLogCreateManyAdminInputEnvelope;
    set?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    disconnect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    delete?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    connect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    update?: Prisma.AdminLogUpdateWithWhereUniqueWithoutAdminInput | Prisma.AdminLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AdminLogUpdateManyWithWhereWithoutAdminInput | Prisma.AdminLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AdminLogScalarWhereInput | Prisma.AdminLogScalarWhereInput[];
};
export type AdminLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput> | Prisma.AdminLogCreateWithoutAdminInput[] | Prisma.AdminLogUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.AdminLogCreateOrConnectWithoutAdminInput | Prisma.AdminLogCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.AdminLogUpsertWithWhereUniqueWithoutAdminInput | Prisma.AdminLogUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.AdminLogCreateManyAdminInputEnvelope;
    set?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    disconnect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    delete?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    connect?: Prisma.AdminLogWhereUniqueInput | Prisma.AdminLogWhereUniqueInput[];
    update?: Prisma.AdminLogUpdateWithWhereUniqueWithoutAdminInput | Prisma.AdminLogUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.AdminLogUpdateManyWithWhereWithoutAdminInput | Prisma.AdminLogUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.AdminLogScalarWhereInput | Prisma.AdminLogScalarWhereInput[];
};
export type AdminLogCreateWithoutAdminInput = {
    id?: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AdminLogUncheckedCreateWithoutAdminInput = {
    id?: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AdminLogCreateOrConnectWithoutAdminInput = {
    where: Prisma.AdminLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput>;
};
export type AdminLogCreateManyAdminInputEnvelope = {
    data: Prisma.AdminLogCreateManyAdminInput | Prisma.AdminLogCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type AdminLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AdminLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminLogUpdateWithoutAdminInput, Prisma.AdminLogUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.AdminLogCreateWithoutAdminInput, Prisma.AdminLogUncheckedCreateWithoutAdminInput>;
};
export type AdminLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.AdminLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminLogUpdateWithoutAdminInput, Prisma.AdminLogUncheckedUpdateWithoutAdminInput>;
};
export type AdminLogUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.AdminLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminLogUpdateManyMutationInput, Prisma.AdminLogUncheckedUpdateManyWithoutAdminInput>;
};
export type AdminLogScalarWhereInput = {
    AND?: Prisma.AdminLogScalarWhereInput | Prisma.AdminLogScalarWhereInput[];
    OR?: Prisma.AdminLogScalarWhereInput[];
    NOT?: Prisma.AdminLogScalarWhereInput | Prisma.AdminLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"AdminLog"> | string;
    adminId?: Prisma.UuidFilter<"AdminLog"> | string;
    action?: Prisma.StringFilter<"AdminLog"> | string;
    targetType?: Prisma.StringNullableFilter<"AdminLog"> | string | null;
    targetId?: Prisma.UuidNullableFilter<"AdminLog"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"AdminLog">;
    createdAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"AdminLog"> | Date | string | null;
};
export type AdminLogCreateManyAdminInput = {
    id?: string;
    action: string;
    targetType?: string | null;
    targetId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type AdminLogUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    targetType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AdminLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLog"]>;
export type AdminLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLog"]>;
export type AdminLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminLog"]>;
export type AdminLogSelectScalar = {
    id?: boolean;
    adminId?: boolean;
    action?: boolean;
    targetType?: boolean;
    targetId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type AdminLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "adminId" | "action" | "targetType" | "targetId" | "metadata" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["adminLog"]>;
export type AdminLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdminLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdminLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminLog";
    objects: {
        admin: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        adminId: string;
        action: string;
        targetType: string | null;
        targetId: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["adminLog"]>;
    composites: {};
};
export type AdminLogGetPayload<S extends boolean | null | undefined | AdminLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminLogPayload, S>;
export type AdminLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminLogCountAggregateInputType | true;
};
export interface AdminLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminLog'];
        meta: {
            name: 'AdminLog';
        };
    };
    findUnique<T extends AdminLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminLogFindManyArgs>(args?: Prisma.SelectSubset<T, AdminLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminLogCreateArgs>(args: Prisma.SelectSubset<T, AdminLogCreateArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminLogDeleteArgs>(args: Prisma.SelectSubset<T, AdminLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminLogUpdateArgs>(args: Prisma.SelectSubset<T, AdminLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminLogUpsertArgs>(args: Prisma.SelectSubset<T, AdminLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminLogClient<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminLogCountArgs>(args?: Prisma.Subset<T, AdminLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminLogCountAggregateOutputType> : number>;
    aggregate<T extends AdminLogAggregateArgs>(args: Prisma.Subset<T, AdminLogAggregateArgs>): Prisma.PrismaPromise<GetAdminLogAggregateType<T>>;
    groupBy<T extends AdminLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminLogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminLogFieldRefs;
}
export interface Prisma__AdminLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminLogFieldRefs {
    readonly id: Prisma.FieldRef<"AdminLog", 'String'>;
    readonly adminId: Prisma.FieldRef<"AdminLog", 'String'>;
    readonly action: Prisma.FieldRef<"AdminLog", 'String'>;
    readonly targetType: Prisma.FieldRef<"AdminLog", 'String'>;
    readonly targetId: Prisma.FieldRef<"AdminLog", 'String'>;
    readonly metadata: Prisma.FieldRef<"AdminLog", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AdminLog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdminLog", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"AdminLog", 'DateTime'>;
}
export type AdminLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where: Prisma.AdminLogWhereUniqueInput;
};
export type AdminLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where: Prisma.AdminLogWhereUniqueInput;
};
export type AdminLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where?: Prisma.AdminLogWhereInput;
    orderBy?: Prisma.AdminLogOrderByWithRelationInput | Prisma.AdminLogOrderByWithRelationInput[];
    cursor?: Prisma.AdminLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminLogScalarFieldEnum | Prisma.AdminLogScalarFieldEnum[];
};
export type AdminLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where?: Prisma.AdminLogWhereInput;
    orderBy?: Prisma.AdminLogOrderByWithRelationInput | Prisma.AdminLogOrderByWithRelationInput[];
    cursor?: Prisma.AdminLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminLogScalarFieldEnum | Prisma.AdminLogScalarFieldEnum[];
};
export type AdminLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where?: Prisma.AdminLogWhereInput;
    orderBy?: Prisma.AdminLogOrderByWithRelationInput | Prisma.AdminLogOrderByWithRelationInput[];
    cursor?: Prisma.AdminLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminLogScalarFieldEnum | Prisma.AdminLogScalarFieldEnum[];
};
export type AdminLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminLogCreateInput, Prisma.AdminLogUncheckedCreateInput>;
};
export type AdminLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminLogCreateManyInput | Prisma.AdminLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    data: Prisma.AdminLogCreateManyInput | Prisma.AdminLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminLogUpdateInput, Prisma.AdminLogUncheckedUpdateInput>;
    where: Prisma.AdminLogWhereUniqueInput;
};
export type AdminLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminLogUpdateManyMutationInput, Prisma.AdminLogUncheckedUpdateManyInput>;
    where?: Prisma.AdminLogWhereInput;
    limit?: number;
};
export type AdminLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminLogUpdateManyMutationInput, Prisma.AdminLogUncheckedUpdateManyInput>;
    where?: Prisma.AdminLogWhereInput;
    limit?: number;
    include?: Prisma.AdminLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where: Prisma.AdminLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminLogCreateInput, Prisma.AdminLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminLogUpdateInput, Prisma.AdminLogUncheckedUpdateInput>;
};
export type AdminLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
    where: Prisma.AdminLogWhereUniqueInput;
};
export type AdminLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminLogWhereInput;
    limit?: number;
};
export type AdminLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminLogSelect<ExtArgs> | null;
    omit?: Prisma.AdminLogOmit<ExtArgs> | null;
    include?: Prisma.AdminLogInclude<ExtArgs> | null;
};
