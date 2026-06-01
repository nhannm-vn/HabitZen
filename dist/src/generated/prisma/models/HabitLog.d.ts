import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HabitLogModel = runtime.Types.Result.DefaultSelection<Prisma.$HabitLogPayload>;
export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null;
    _avg: HabitLogAvgAggregateOutputType | null;
    _sum: HabitLogSumAggregateOutputType | null;
    _min: HabitLogMinAggregateOutputType | null;
    _max: HabitLogMaxAggregateOutputType | null;
};
export type HabitLogAvgAggregateOutputType = {
    progressValue: number | null;
};
export type HabitLogSumAggregateOutputType = {
    progressValue: number | null;
};
export type HabitLogMinAggregateOutputType = {
    id: string | null;
    habitId: string | null;
    userId: string | null;
    logDate: Date | null;
    status: $Enums.HabitLogStatus | null;
    progressValue: number | null;
    note: string | null;
    checkedInAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type HabitLogMaxAggregateOutputType = {
    id: string | null;
    habitId: string | null;
    userId: string | null;
    logDate: Date | null;
    status: $Enums.HabitLogStatus | null;
    progressValue: number | null;
    note: string | null;
    checkedInAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type HabitLogCountAggregateOutputType = {
    id: number;
    habitId: number;
    userId: number;
    logDate: number;
    status: number;
    progressValue: number;
    note: number;
    checkedInAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type HabitLogAvgAggregateInputType = {
    progressValue?: true;
};
export type HabitLogSumAggregateInputType = {
    progressValue?: true;
};
export type HabitLogMinAggregateInputType = {
    id?: true;
    habitId?: true;
    userId?: true;
    logDate?: true;
    status?: true;
    progressValue?: true;
    note?: true;
    checkedInAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type HabitLogMaxAggregateInputType = {
    id?: true;
    habitId?: true;
    userId?: true;
    logDate?: true;
    status?: true;
    progressValue?: true;
    note?: true;
    checkedInAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type HabitLogCountAggregateInputType = {
    id?: true;
    habitId?: true;
    userId?: true;
    logDate?: true;
    status?: true;
    progressValue?: true;
    note?: true;
    checkedInAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type HabitLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitLogCountAggregateInputType;
    _avg?: HabitLogAvgAggregateInputType;
    _sum?: HabitLogSumAggregateInputType;
    _min?: HabitLogMinAggregateInputType;
    _max?: HabitLogMaxAggregateInputType;
};
export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
    [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabitLog[P]> : Prisma.GetScalarType<T[P], AggregateHabitLog[P]>;
};
export type HabitLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithAggregationInput | Prisma.HabitLogOrderByWithAggregationInput[];
    by: Prisma.HabitLogScalarFieldEnum[] | Prisma.HabitLogScalarFieldEnum;
    having?: Prisma.HabitLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitLogCountAggregateInputType | true;
    _avg?: HabitLogAvgAggregateInputType;
    _sum?: HabitLogSumAggregateInputType;
    _min?: HabitLogMinAggregateInputType;
    _max?: HabitLogMaxAggregateInputType;
};
export type HabitLogGroupByOutputType = {
    id: string;
    habitId: string;
    userId: string;
    logDate: Date;
    status: $Enums.HabitLogStatus;
    progressValue: number | null;
    note: string | null;
    checkedInAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: HabitLogCountAggregateOutputType | null;
    _avg: HabitLogAvgAggregateOutputType | null;
    _sum: HabitLogSumAggregateOutputType | null;
    _min: HabitLogMinAggregateOutputType | null;
    _max: HabitLogMaxAggregateOutputType | null;
};
export type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitLogGroupByOutputType[P]>;
}>>;
export type HabitLogWhereInput = {
    AND?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    OR?: Prisma.HabitLogWhereInput[];
    NOT?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    id?: Prisma.UuidFilter<"HabitLog"> | string;
    habitId?: Prisma.UuidFilter<"HabitLog"> | string;
    userId?: Prisma.UuidFilter<"HabitLog"> | string;
    logDate?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    status?: Prisma.EnumHabitLogStatusFilter<"HabitLog"> | $Enums.HabitLogStatus;
    progressValue?: Prisma.FloatNullableFilter<"HabitLog"> | number | null;
    note?: Prisma.StringNullableFilter<"HabitLog"> | string | null;
    checkedInAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type HabitLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    logDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progressValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    habit?: Prisma.HabitOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    habitId_logDate?: Prisma.HabitLogHabitIdLogDateCompoundUniqueInput;
    AND?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    OR?: Prisma.HabitLogWhereInput[];
    NOT?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    habitId?: Prisma.UuidFilter<"HabitLog"> | string;
    userId?: Prisma.UuidFilter<"HabitLog"> | string;
    logDate?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    status?: Prisma.EnumHabitLogStatusFilter<"HabitLog"> | $Enums.HabitLogStatus;
    progressValue?: Prisma.FloatNullableFilter<"HabitLog"> | number | null;
    note?: Prisma.StringNullableFilter<"HabitLog"> | string | null;
    checkedInAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "habitId_logDate">;
export type HabitLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    logDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progressValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.HabitLogCountOrderByAggregateInput;
    _avg?: Prisma.HabitLogAvgOrderByAggregateInput;
    _max?: Prisma.HabitLogMaxOrderByAggregateInput;
    _min?: Prisma.HabitLogMinOrderByAggregateInput;
    _sum?: Prisma.HabitLogSumOrderByAggregateInput;
};
export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.HabitLogScalarWhereWithAggregatesInput | Prisma.HabitLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.HabitLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HabitLogScalarWhereWithAggregatesInput | Prisma.HabitLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"HabitLog"> | string;
    habitId?: Prisma.UuidWithAggregatesFilter<"HabitLog"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"HabitLog"> | string;
    logDate?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
    status?: Prisma.EnumHabitLogStatusWithAggregatesFilter<"HabitLog"> | $Enums.HabitLogStatus;
    progressValue?: Prisma.FloatNullableWithAggregatesFilter<"HabitLog"> | number | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"HabitLog"> | string | null;
    checkedInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"HabitLog"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"HabitLog"> | Date | string | null;
};
export type HabitLogCreateInput = {
    id?: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    habit: Prisma.HabitCreateNestedOneWithoutLogsInput;
    user: Prisma.UserCreateNestedOneWithoutHabitLogsInput;
};
export type HabitLogUncheckedCreateInput = {
    id?: string;
    habitId: string;
    userId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habit?: Prisma.HabitUpdateOneRequiredWithoutLogsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitLogsNestedInput;
};
export type HabitLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogCreateManyInput = {
    id?: string;
    habitId: string;
    userId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogListRelationFilter = {
    every?: Prisma.HabitLogWhereInput;
    some?: Prisma.HabitLogWhereInput;
    none?: Prisma.HabitLogWhereInput;
};
export type HabitLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HabitLogHabitIdLogDateCompoundUniqueInput = {
    habitId: string;
    logDate: Date | string;
};
export type HabitLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    logDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progressValue?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitLogAvgOrderByAggregateInput = {
    progressValue?: Prisma.SortOrder;
};
export type HabitLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    logDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progressValue?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    logDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    progressValue?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitLogSumOrderByAggregateInput = {
    progressValue?: Prisma.SortOrder;
};
export type HabitLogCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput> | Prisma.HabitLogCreateWithoutUserInput[] | Prisma.HabitLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserInput | Prisma.HabitLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HabitLogCreateManyUserInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput> | Prisma.HabitLogCreateWithoutUserInput[] | Prisma.HabitLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserInput | Prisma.HabitLogCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HabitLogCreateManyUserInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput> | Prisma.HabitLogCreateWithoutUserInput[] | Prisma.HabitLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserInput | Prisma.HabitLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutUserInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HabitLogCreateManyUserInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutUserInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutUserInput | Prisma.HabitLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type HabitLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput> | Prisma.HabitLogCreateWithoutUserInput[] | Prisma.HabitLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserInput | Prisma.HabitLogCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutUserInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HabitLogCreateManyUserInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutUserInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutUserInput | Prisma.HabitLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput> | Prisma.HabitLogCreateWithoutHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutHabitInput | Prisma.HabitLogCreateOrConnectWithoutHabitInput[];
    createMany?: Prisma.HabitLogCreateManyHabitInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput> | Prisma.HabitLogCreateWithoutHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutHabitInput | Prisma.HabitLogCreateOrConnectWithoutHabitInput[];
    createMany?: Prisma.HabitLogCreateManyHabitInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput> | Prisma.HabitLogCreateWithoutHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutHabitInput | Prisma.HabitLogCreateOrConnectWithoutHabitInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutHabitInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutHabitInput[];
    createMany?: Prisma.HabitLogCreateManyHabitInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutHabitInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutHabitInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutHabitInput | Prisma.HabitLogUpdateManyWithWhereWithoutHabitInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput> | Prisma.HabitLogCreateWithoutHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutHabitInput | Prisma.HabitLogCreateOrConnectWithoutHabitInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutHabitInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutHabitInput[];
    createMany?: Prisma.HabitLogCreateManyHabitInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutHabitInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutHabitInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutHabitInput | Prisma.HabitLogUpdateManyWithWhereWithoutHabitInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type EnumHabitLogStatusFieldUpdateOperationsInput = {
    set?: $Enums.HabitLogStatus;
};
export type HabitLogCreateWithoutUserInput = {
    id?: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    habit: Prisma.HabitCreateNestedOneWithoutLogsInput;
};
export type HabitLogUncheckedCreateWithoutUserInput = {
    id?: string;
    habitId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogCreateOrConnectWithoutUserInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput>;
};
export type HabitLogCreateManyUserInputEnvelope = {
    data: Prisma.HabitLogCreateManyUserInput | Prisma.HabitLogCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HabitLogUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitLogUpdateWithoutUserInput, Prisma.HabitLogUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutUserInput, Prisma.HabitLogUncheckedCreateWithoutUserInput>;
};
export type HabitLogUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateWithoutUserInput, Prisma.HabitLogUncheckedUpdateWithoutUserInput>;
};
export type HabitLogUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HabitLogScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyWithoutUserInput>;
};
export type HabitLogScalarWhereInput = {
    AND?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
    OR?: Prisma.HabitLogScalarWhereInput[];
    NOT?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"HabitLog"> | string;
    habitId?: Prisma.UuidFilter<"HabitLog"> | string;
    userId?: Prisma.UuidFilter<"HabitLog"> | string;
    logDate?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    status?: Prisma.EnumHabitLogStatusFilter<"HabitLog"> | $Enums.HabitLogStatus;
    progressValue?: Prisma.FloatNullableFilter<"HabitLog"> | number | null;
    note?: Prisma.StringNullableFilter<"HabitLog"> | string | null;
    checkedInAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"HabitLog"> | Date | string | null;
};
export type HabitLogCreateWithoutHabitInput = {
    id?: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitLogsInput;
};
export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: string;
    userId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput>;
};
export type HabitLogCreateManyHabitInputEnvelope = {
    data: Prisma.HabitLogCreateManyHabitInput | Prisma.HabitLogCreateManyHabitInput[];
    skipDuplicates?: boolean;
};
export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitLogUpdateWithoutHabitInput, Prisma.HabitLogUncheckedUpdateWithoutHabitInput>;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutHabitInput, Prisma.HabitLogUncheckedCreateWithoutHabitInput>;
};
export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateWithoutHabitInput, Prisma.HabitLogUncheckedUpdateWithoutHabitInput>;
};
export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: Prisma.HabitLogScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyWithoutHabitInput>;
};
export type HabitLogCreateManyUserInput = {
    id?: string;
    habitId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habit?: Prisma.HabitUpdateOneRequiredWithoutLogsNestedInput;
};
export type HabitLogUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogCreateManyHabitInput = {
    id?: string;
    userId: string;
    logDate: Date | string;
    status?: $Enums.HabitLogStatus;
    progressValue?: number | null;
    note?: string | null;
    checkedInAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitLogUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitLogsNestedInput;
};
export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    logDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumHabitLogStatusFieldUpdateOperationsInput | $Enums.HabitLogStatus;
    progressValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    userId?: boolean;
    logDate?: boolean;
    status?: boolean;
    progressValue?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    userId?: boolean;
    logDate?: boolean;
    status?: boolean;
    progressValue?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    userId?: boolean;
    logDate?: boolean;
    status?: boolean;
    progressValue?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectScalar = {
    id?: boolean;
    habitId?: boolean;
    userId?: boolean;
    logDate?: boolean;
    status?: boolean;
    progressValue?: boolean;
    note?: boolean;
    checkedInAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type HabitLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "habitId" | "userId" | "logDate" | "status" | "progressValue" | "note" | "checkedInAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["habitLog"]>;
export type HabitLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $HabitLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HabitLog";
    objects: {
        habit: Prisma.$HabitPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        habitId: string;
        userId: string;
        logDate: Date;
        status: $Enums.HabitLogStatus;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["habitLog"]>;
    composites: {};
};
export type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HabitLogPayload, S>;
export type HabitLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitLogCountAggregateInputType | true;
};
export interface HabitLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'];
        meta: {
            name: 'HabitLog';
        };
    };
    findUnique<T extends HabitLogFindUniqueArgs>(args: Prisma.SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HabitLogFindFirstArgs>(args?: Prisma.SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HabitLogFindManyArgs>(args?: Prisma.SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HabitLogCreateArgs>(args: Prisma.SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HabitLogCreateManyArgs>(args?: Prisma.SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HabitLogDeleteArgs>(args: Prisma.SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HabitLogUpdateArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HabitLogUpdateManyArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HabitLogUpsertArgs>(args: Prisma.SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HabitLogCountArgs>(args?: Prisma.Subset<T, HabitLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitLogCountAggregateOutputType> : number>;
    aggregate<T extends HabitLogAggregateArgs>(args: Prisma.Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>;
    groupBy<T extends HabitLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HabitLogGroupByArgs['orderBy'];
    } : {
        orderBy?: HabitLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HabitLogFieldRefs;
}
export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    habit<T extends Prisma.HabitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HabitDefaultArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HabitLogFieldRefs {
    readonly id: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly habitId: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly userId: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly logDate: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly status: Prisma.FieldRef<"HabitLog", 'HabitLogStatus'>;
    readonly progressValue: Prisma.FieldRef<"HabitLog", 'Float'>;
    readonly note: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly checkedInAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
}
export type HabitLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitLogScalarFieldEnum | Prisma.HabitLogScalarFieldEnum[];
};
export type HabitLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitLogScalarFieldEnum | Prisma.HabitLogScalarFieldEnum[];
};
export type HabitLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitLogScalarFieldEnum | Prisma.HabitLogScalarFieldEnum[];
};
export type HabitLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogCreateInput, Prisma.HabitLogUncheckedCreateInput>;
};
export type HabitLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HabitLogCreateManyInput | Prisma.HabitLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HabitLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    data: Prisma.HabitLogCreateManyInput | Prisma.HabitLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HabitLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HabitLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogUpdateInput, Prisma.HabitLogUncheckedUpdateInput>;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyInput>;
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
};
export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyInput>;
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
    include?: Prisma.HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HabitLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitLogCreateInput, Prisma.HabitLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HabitLogUpdateInput, Prisma.HabitLogUncheckedUpdateInput>;
};
export type HabitLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
};
export type HabitLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
};
