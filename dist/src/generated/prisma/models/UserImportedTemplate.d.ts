import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserImportedTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$UserImportedTemplatePayload>;
export type AggregateUserImportedTemplate = {
    _count: UserImportedTemplateCountAggregateOutputType | null;
    _min: UserImportedTemplateMinAggregateOutputType | null;
    _max: UserImportedTemplateMaxAggregateOutputType | null;
};
export type UserImportedTemplateMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    templateId: string | null;
    importedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserImportedTemplateMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    templateId: string | null;
    importedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserImportedTemplateCountAggregateOutputType = {
    id: number;
    userId: number;
    templateId: number;
    importedAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserImportedTemplateMinAggregateInputType = {
    id?: true;
    userId?: true;
    templateId?: true;
    importedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserImportedTemplateMaxAggregateInputType = {
    id?: true;
    userId?: true;
    templateId?: true;
    importedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserImportedTemplateCountAggregateInputType = {
    id?: true;
    userId?: true;
    templateId?: true;
    importedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserImportedTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserImportedTemplateWhereInput;
    orderBy?: Prisma.UserImportedTemplateOrderByWithRelationInput | Prisma.UserImportedTemplateOrderByWithRelationInput[];
    cursor?: Prisma.UserImportedTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserImportedTemplateCountAggregateInputType;
    _min?: UserImportedTemplateMinAggregateInputType;
    _max?: UserImportedTemplateMaxAggregateInputType;
};
export type GetUserImportedTemplateAggregateType<T extends UserImportedTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateUserImportedTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserImportedTemplate[P]> : Prisma.GetScalarType<T[P], AggregateUserImportedTemplate[P]>;
};
export type UserImportedTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserImportedTemplateWhereInput;
    orderBy?: Prisma.UserImportedTemplateOrderByWithAggregationInput | Prisma.UserImportedTemplateOrderByWithAggregationInput[];
    by: Prisma.UserImportedTemplateScalarFieldEnum[] | Prisma.UserImportedTemplateScalarFieldEnum;
    having?: Prisma.UserImportedTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserImportedTemplateCountAggregateInputType | true;
    _min?: UserImportedTemplateMinAggregateInputType;
    _max?: UserImportedTemplateMaxAggregateInputType;
};
export type UserImportedTemplateGroupByOutputType = {
    id: string;
    userId: string;
    templateId: string;
    importedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserImportedTemplateCountAggregateOutputType | null;
    _min: UserImportedTemplateMinAggregateOutputType | null;
    _max: UserImportedTemplateMaxAggregateOutputType | null;
};
export type GetUserImportedTemplateGroupByPayload<T extends UserImportedTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserImportedTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserImportedTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserImportedTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserImportedTemplateGroupByOutputType[P]>;
}>>;
export type UserImportedTemplateWhereInput = {
    AND?: Prisma.UserImportedTemplateWhereInput | Prisma.UserImportedTemplateWhereInput[];
    OR?: Prisma.UserImportedTemplateWhereInput[];
    NOT?: Prisma.UserImportedTemplateWhereInput | Prisma.UserImportedTemplateWhereInput[];
    id?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    userId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    templateId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    importedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"UserImportedTemplate"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    template?: Prisma.XOR<Prisma.CelebrityHabitTemplateScalarRelationFilter, Prisma.CelebrityHabitTemplateWhereInput>;
};
export type UserImportedTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    importedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    template?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput;
};
export type UserImportedTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_templateId?: Prisma.UserImportedTemplateUserIdTemplateIdCompoundUniqueInput;
    AND?: Prisma.UserImportedTemplateWhereInput | Prisma.UserImportedTemplateWhereInput[];
    OR?: Prisma.UserImportedTemplateWhereInput[];
    NOT?: Prisma.UserImportedTemplateWhereInput | Prisma.UserImportedTemplateWhereInput[];
    userId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    templateId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    importedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"UserImportedTemplate"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    template?: Prisma.XOR<Prisma.CelebrityHabitTemplateScalarRelationFilter, Prisma.CelebrityHabitTemplateWhereInput>;
}, "id" | "userId_templateId">;
export type UserImportedTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    importedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserImportedTemplateCountOrderByAggregateInput;
    _max?: Prisma.UserImportedTemplateMaxOrderByAggregateInput;
    _min?: Prisma.UserImportedTemplateMinOrderByAggregateInput;
};
export type UserImportedTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserImportedTemplateScalarWhereWithAggregatesInput | Prisma.UserImportedTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserImportedTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserImportedTemplateScalarWhereWithAggregatesInput | Prisma.UserImportedTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"UserImportedTemplate"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"UserImportedTemplate"> | string;
    templateId?: Prisma.UuidWithAggregatesFilter<"UserImportedTemplate"> | string;
    importedAt?: Prisma.DateTimeWithAggregatesFilter<"UserImportedTemplate"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserImportedTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserImportedTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserImportedTemplate"> | Date | string | null;
};
export type UserImportedTemplateCreateInput = {
    id?: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutImportedTemplatesInput;
    template: Prisma.CelebrityHabitTemplateCreateNestedOneWithoutImportedByUsersInput;
};
export type UserImportedTemplateUncheckedCreateInput = {
    id?: string;
    userId: string;
    templateId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutImportedTemplatesNestedInput;
    template?: Prisma.CelebrityHabitTemplateUpdateOneRequiredWithoutImportedByUsersNestedInput;
};
export type UserImportedTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateCreateManyInput = {
    id?: string;
    userId: string;
    templateId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateListRelationFilter = {
    every?: Prisma.UserImportedTemplateWhereInput;
    some?: Prisma.UserImportedTemplateWhereInput;
    none?: Prisma.UserImportedTemplateWhereInput;
};
export type UserImportedTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserImportedTemplateUserIdTemplateIdCompoundUniqueInput = {
    userId: string;
    templateId: string;
};
export type UserImportedTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    importedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserImportedTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    importedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserImportedTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    importedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserImportedTemplateCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput> | Prisma.UserImportedTemplateCreateWithoutUserInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput | Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyUserInputEnvelope;
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
};
export type UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput> | Prisma.UserImportedTemplateCreateWithoutUserInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput | Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyUserInputEnvelope;
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
};
export type UserImportedTemplateUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput> | Prisma.UserImportedTemplateCreateWithoutUserInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput | Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutUserInput | Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyUserInputEnvelope;
    set?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    disconnect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    delete?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    update?: Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutUserInput | Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserImportedTemplateUpdateManyWithWhereWithoutUserInput | Prisma.UserImportedTemplateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
};
export type UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput> | Prisma.UserImportedTemplateCreateWithoutUserInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput | Prisma.UserImportedTemplateCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutUserInput | Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyUserInputEnvelope;
    set?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    disconnect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    delete?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    update?: Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutUserInput | Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserImportedTemplateUpdateManyWithWhereWithoutUserInput | Prisma.UserImportedTemplateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
};
export type UserImportedTemplateCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput> | Prisma.UserImportedTemplateCreateWithoutTemplateInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput | Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyTemplateInputEnvelope;
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
};
export type UserImportedTemplateUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput> | Prisma.UserImportedTemplateCreateWithoutTemplateInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput | Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyTemplateInputEnvelope;
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
};
export type UserImportedTemplateUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput> | Prisma.UserImportedTemplateCreateWithoutTemplateInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput | Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutTemplateInput | Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyTemplateInputEnvelope;
    set?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    disconnect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    delete?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    update?: Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutTemplateInput | Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.UserImportedTemplateUpdateManyWithWhereWithoutTemplateInput | Prisma.UserImportedTemplateUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
};
export type UserImportedTemplateUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput> | Prisma.UserImportedTemplateCreateWithoutTemplateInput[] | Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput | Prisma.UserImportedTemplateCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutTemplateInput | Prisma.UserImportedTemplateUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.UserImportedTemplateCreateManyTemplateInputEnvelope;
    set?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    disconnect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    delete?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    connect?: Prisma.UserImportedTemplateWhereUniqueInput | Prisma.UserImportedTemplateWhereUniqueInput[];
    update?: Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutTemplateInput | Prisma.UserImportedTemplateUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.UserImportedTemplateUpdateManyWithWhereWithoutTemplateInput | Prisma.UserImportedTemplateUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
};
export type UserImportedTemplateCreateWithoutUserInput = {
    id?: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    template: Prisma.CelebrityHabitTemplateCreateNestedOneWithoutImportedByUsersInput;
};
export type UserImportedTemplateUncheckedCreateWithoutUserInput = {
    id?: string;
    templateId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateCreateOrConnectWithoutUserInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput>;
};
export type UserImportedTemplateCreateManyUserInputEnvelope = {
    data: Prisma.UserImportedTemplateCreateManyUserInput | Prisma.UserImportedTemplateCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserImportedTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserImportedTemplateUpdateWithoutUserInput, Prisma.UserImportedTemplateUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutUserInput, Prisma.UserImportedTemplateUncheckedCreateWithoutUserInput>;
};
export type UserImportedTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateWithoutUserInput, Prisma.UserImportedTemplateUncheckedUpdateWithoutUserInput>;
};
export type UserImportedTemplateUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserImportedTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateManyMutationInput, Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserInput>;
};
export type UserImportedTemplateScalarWhereInput = {
    AND?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
    OR?: Prisma.UserImportedTemplateScalarWhereInput[];
    NOT?: Prisma.UserImportedTemplateScalarWhereInput | Prisma.UserImportedTemplateScalarWhereInput[];
    id?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    userId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    templateId?: Prisma.UuidFilter<"UserImportedTemplate"> | string;
    importedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserImportedTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"UserImportedTemplate"> | Date | string | null;
};
export type UserImportedTemplateCreateWithoutTemplateInput = {
    id?: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutImportedTemplatesInput;
};
export type UserImportedTemplateUncheckedCreateWithoutTemplateInput = {
    id?: string;
    userId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateCreateOrConnectWithoutTemplateInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput>;
};
export type UserImportedTemplateCreateManyTemplateInputEnvelope = {
    data: Prisma.UserImportedTemplateCreateManyTemplateInput | Prisma.UserImportedTemplateCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type UserImportedTemplateUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserImportedTemplateUpdateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.UserImportedTemplateCreateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedCreateWithoutTemplateInput>;
};
export type UserImportedTemplateUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateWithoutTemplateInput, Prisma.UserImportedTemplateUncheckedUpdateWithoutTemplateInput>;
};
export type UserImportedTemplateUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.UserImportedTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateManyMutationInput, Prisma.UserImportedTemplateUncheckedUpdateManyWithoutTemplateInput>;
};
export type UserImportedTemplateCreateManyUserInput = {
    id?: string;
    templateId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    template?: Prisma.CelebrityHabitTemplateUpdateOneRequiredWithoutImportedByUsersNestedInput;
};
export type UserImportedTemplateUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateCreateManyTemplateInput = {
    id?: string;
    userId: string;
    importedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserImportedTemplateUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutImportedTemplatesNestedInput;
};
export type UserImportedTemplateUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    importedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserImportedTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    importedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userImportedTemplate"]>;
export type UserImportedTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    importedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userImportedTemplate"]>;
export type UserImportedTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    importedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userImportedTemplate"]>;
export type UserImportedTemplateSelectScalar = {
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    importedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserImportedTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "templateId" | "importedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userImportedTemplate"]>;
export type UserImportedTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type UserImportedTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type UserImportedTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type $UserImportedTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserImportedTemplate";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        template: Prisma.$CelebrityHabitTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        templateId: string;
        importedAt: Date;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["userImportedTemplate"]>;
    composites: {};
};
export type UserImportedTemplateGetPayload<S extends boolean | null | undefined | UserImportedTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload, S>;
export type UserImportedTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserImportedTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserImportedTemplateCountAggregateInputType | true;
};
export interface UserImportedTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserImportedTemplate'];
        meta: {
            name: 'UserImportedTemplate';
        };
    };
    findUnique<T extends UserImportedTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserImportedTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserImportedTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserImportedTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserImportedTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserImportedTemplateCreateArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserImportedTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserImportedTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserImportedTemplateDeleteArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserImportedTemplateUpdateArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserImportedTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserImportedTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserImportedTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserImportedTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserImportedTemplateUpsertArgs>(args: Prisma.SelectSubset<T, UserImportedTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__UserImportedTemplateClient<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserImportedTemplateCountArgs>(args?: Prisma.Subset<T, UserImportedTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserImportedTemplateCountAggregateOutputType> : number>;
    aggregate<T extends UserImportedTemplateAggregateArgs>(args: Prisma.Subset<T, UserImportedTemplateAggregateArgs>): Prisma.PrismaPromise<GetUserImportedTemplateAggregateType<T>>;
    groupBy<T extends UserImportedTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserImportedTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: UserImportedTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserImportedTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserImportedTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserImportedTemplateFieldRefs;
}
export interface Prisma__UserImportedTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserImportedTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"UserImportedTemplate", 'String'>;
    readonly userId: Prisma.FieldRef<"UserImportedTemplate", 'String'>;
    readonly templateId: Prisma.FieldRef<"UserImportedTemplate", 'String'>;
    readonly importedAt: Prisma.FieldRef<"UserImportedTemplate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"UserImportedTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserImportedTemplate", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"UserImportedTemplate", 'DateTime'>;
}
export type UserImportedTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where: Prisma.UserImportedTemplateWhereUniqueInput;
};
export type UserImportedTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where: Prisma.UserImportedTemplateWhereUniqueInput;
};
export type UserImportedTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where?: Prisma.UserImportedTemplateWhereInput;
    orderBy?: Prisma.UserImportedTemplateOrderByWithRelationInput | Prisma.UserImportedTemplateOrderByWithRelationInput[];
    cursor?: Prisma.UserImportedTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserImportedTemplateScalarFieldEnum | Prisma.UserImportedTemplateScalarFieldEnum[];
};
export type UserImportedTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where?: Prisma.UserImportedTemplateWhereInput;
    orderBy?: Prisma.UserImportedTemplateOrderByWithRelationInput | Prisma.UserImportedTemplateOrderByWithRelationInput[];
    cursor?: Prisma.UserImportedTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserImportedTemplateScalarFieldEnum | Prisma.UserImportedTemplateScalarFieldEnum[];
};
export type UserImportedTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where?: Prisma.UserImportedTemplateWhereInput;
    orderBy?: Prisma.UserImportedTemplateOrderByWithRelationInput | Prisma.UserImportedTemplateOrderByWithRelationInput[];
    cursor?: Prisma.UserImportedTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserImportedTemplateScalarFieldEnum | Prisma.UserImportedTemplateScalarFieldEnum[];
};
export type UserImportedTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserImportedTemplateCreateInput, Prisma.UserImportedTemplateUncheckedCreateInput>;
};
export type UserImportedTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserImportedTemplateCreateManyInput | Prisma.UserImportedTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserImportedTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    data: Prisma.UserImportedTemplateCreateManyInput | Prisma.UserImportedTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserImportedTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserImportedTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateInput, Prisma.UserImportedTemplateUncheckedUpdateInput>;
    where: Prisma.UserImportedTemplateWhereUniqueInput;
};
export type UserImportedTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateManyMutationInput, Prisma.UserImportedTemplateUncheckedUpdateManyInput>;
    where?: Prisma.UserImportedTemplateWhereInput;
    limit?: number;
};
export type UserImportedTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserImportedTemplateUpdateManyMutationInput, Prisma.UserImportedTemplateUncheckedUpdateManyInput>;
    where?: Prisma.UserImportedTemplateWhereInput;
    limit?: number;
    include?: Prisma.UserImportedTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserImportedTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where: Prisma.UserImportedTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserImportedTemplateCreateInput, Prisma.UserImportedTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserImportedTemplateUpdateInput, Prisma.UserImportedTemplateUncheckedUpdateInput>;
};
export type UserImportedTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
    where: Prisma.UserImportedTemplateWhereUniqueInput;
};
export type UserImportedTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserImportedTemplateWhereInput;
    limit?: number;
};
export type UserImportedTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserImportedTemplateSelect<ExtArgs> | null;
    omit?: Prisma.UserImportedTemplateOmit<ExtArgs> | null;
    include?: Prisma.UserImportedTemplateInclude<ExtArgs> | null;
};
