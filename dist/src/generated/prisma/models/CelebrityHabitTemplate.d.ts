import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CelebrityHabitTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$CelebrityHabitTemplatePayload>;
export type AggregateCelebrityHabitTemplate = {
    _count: CelebrityHabitTemplateCountAggregateOutputType | null;
    _avg: CelebrityHabitTemplateAvgAggregateOutputType | null;
    _sum: CelebrityHabitTemplateSumAggregateOutputType | null;
    _min: CelebrityHabitTemplateMinAggregateOutputType | null;
    _max: CelebrityHabitTemplateMaxAggregateOutputType | null;
};
export type CelebrityHabitTemplateAvgAggregateOutputType = {
    estimatedMinutes: number | null;
};
export type CelebrityHabitTemplateSumAggregateOutputType = {
    estimatedMinutes: number | null;
};
export type CelebrityHabitTemplateMinAggregateOutputType = {
    id: string | null;
    celebrityName: string | null;
    title: string | null;
    description: string | null;
    categoryId: string | null;
    difficulty: $Enums.TemplateDifficulty | null;
    estimatedMinutes: number | null;
    isPublic: boolean | null;
    isFeatured: boolean | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type CelebrityHabitTemplateMaxAggregateOutputType = {
    id: string | null;
    celebrityName: string | null;
    title: string | null;
    description: string | null;
    categoryId: string | null;
    difficulty: $Enums.TemplateDifficulty | null;
    estimatedMinutes: number | null;
    isPublic: boolean | null;
    isFeatured: boolean | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type CelebrityHabitTemplateCountAggregateOutputType = {
    id: number;
    celebrityName: number;
    title: number;
    description: number;
    categoryId: number;
    difficulty: number;
    estimatedMinutes: number;
    isPublic: number;
    isFeatured: number;
    createdBy: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type CelebrityHabitTemplateAvgAggregateInputType = {
    estimatedMinutes?: true;
};
export type CelebrityHabitTemplateSumAggregateInputType = {
    estimatedMinutes?: true;
};
export type CelebrityHabitTemplateMinAggregateInputType = {
    id?: true;
    celebrityName?: true;
    title?: true;
    description?: true;
    categoryId?: true;
    difficulty?: true;
    estimatedMinutes?: true;
    isPublic?: true;
    isFeatured?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type CelebrityHabitTemplateMaxAggregateInputType = {
    id?: true;
    celebrityName?: true;
    title?: true;
    description?: true;
    categoryId?: true;
    difficulty?: true;
    estimatedMinutes?: true;
    isPublic?: true;
    isFeatured?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type CelebrityHabitTemplateCountAggregateInputType = {
    id?: true;
    celebrityName?: true;
    title?: true;
    description?: true;
    categoryId?: true;
    difficulty?: true;
    estimatedMinutes?: true;
    isPublic?: true;
    isFeatured?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type CelebrityHabitTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput | Prisma.CelebrityHabitTemplateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CelebrityHabitTemplateCountAggregateInputType;
    _avg?: CelebrityHabitTemplateAvgAggregateInputType;
    _sum?: CelebrityHabitTemplateSumAggregateInputType;
    _min?: CelebrityHabitTemplateMinAggregateInputType;
    _max?: CelebrityHabitTemplateMaxAggregateInputType;
};
export type GetCelebrityHabitTemplateAggregateType<T extends CelebrityHabitTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateCelebrityHabitTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCelebrityHabitTemplate[P]> : Prisma.GetScalarType<T[P], AggregateCelebrityHabitTemplate[P]>;
};
export type CelebrityHabitTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateOrderByWithAggregationInput | Prisma.CelebrityHabitTemplateOrderByWithAggregationInput[];
    by: Prisma.CelebrityHabitTemplateScalarFieldEnum[] | Prisma.CelebrityHabitTemplateScalarFieldEnum;
    having?: Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CelebrityHabitTemplateCountAggregateInputType | true;
    _avg?: CelebrityHabitTemplateAvgAggregateInputType;
    _sum?: CelebrityHabitTemplateSumAggregateInputType;
    _min?: CelebrityHabitTemplateMinAggregateInputType;
    _max?: CelebrityHabitTemplateMaxAggregateInputType;
};
export type CelebrityHabitTemplateGroupByOutputType = {
    id: string;
    celebrityName: string;
    title: string;
    description: string | null;
    categoryId: string | null;
    difficulty: $Enums.TemplateDifficulty;
    estimatedMinutes: number | null;
    isPublic: boolean;
    isFeatured: boolean;
    createdBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: CelebrityHabitTemplateCountAggregateOutputType | null;
    _avg: CelebrityHabitTemplateAvgAggregateOutputType | null;
    _sum: CelebrityHabitTemplateSumAggregateOutputType | null;
    _min: CelebrityHabitTemplateMinAggregateOutputType | null;
    _max: CelebrityHabitTemplateMaxAggregateOutputType | null;
};
export type GetCelebrityHabitTemplateGroupByPayload<T extends CelebrityHabitTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CelebrityHabitTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CelebrityHabitTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CelebrityHabitTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CelebrityHabitTemplateGroupByOutputType[P]>;
}>>;
export type CelebrityHabitTemplateWhereInput = {
    AND?: Prisma.CelebrityHabitTemplateWhereInput | Prisma.CelebrityHabitTemplateWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateWhereInput | Prisma.CelebrityHabitTemplateWhereInput[];
    id?: Prisma.UuidFilter<"CelebrityHabitTemplate"> | string;
    celebrityName?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    title?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplate"> | string | null;
    categoryId?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFilter<"CelebrityHabitTemplate"> | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.IntNullableFilter<"CelebrityHabitTemplate"> | number | null;
    isPublic?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    isFeatured?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    createdBy?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplate"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.CelebrityHabitTemplateItemListRelationFilter;
    importedByUsers?: Prisma.UserImportedTemplateListRelationFilter;
};
export type CelebrityHabitTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    celebrityName?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPublic?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    creator?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.CelebrityHabitTemplateItemOrderByRelationAggregateInput;
    importedByUsers?: Prisma.UserImportedTemplateOrderByRelationAggregateInput;
};
export type CelebrityHabitTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CelebrityHabitTemplateWhereInput | Prisma.CelebrityHabitTemplateWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateWhereInput | Prisma.CelebrityHabitTemplateWhereInput[];
    celebrityName?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    title?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplate"> | string | null;
    categoryId?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFilter<"CelebrityHabitTemplate"> | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.IntNullableFilter<"CelebrityHabitTemplate"> | number | null;
    isPublic?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    isFeatured?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    createdBy?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplate"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.CelebrityHabitTemplateItemListRelationFilter;
    importedByUsers?: Prisma.UserImportedTemplateListRelationFilter;
}, "id">;
export type CelebrityHabitTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    celebrityName?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPublic?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CelebrityHabitTemplateCountOrderByAggregateInput;
    _avg?: Prisma.CelebrityHabitTemplateAvgOrderByAggregateInput;
    _max?: Prisma.CelebrityHabitTemplateMaxOrderByAggregateInput;
    _min?: Prisma.CelebrityHabitTemplateMinOrderByAggregateInput;
    _sum?: Prisma.CelebrityHabitTemplateSumOrderByAggregateInput;
};
export type CelebrityHabitTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput | Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput | Prisma.CelebrityHabitTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CelebrityHabitTemplate"> | string;
    celebrityName?: Prisma.StringWithAggregatesFilter<"CelebrityHabitTemplate"> | string;
    title?: Prisma.StringWithAggregatesFilter<"CelebrityHabitTemplate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CelebrityHabitTemplate"> | string | null;
    categoryId?: Prisma.UuidNullableWithAggregatesFilter<"CelebrityHabitTemplate"> | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyWithAggregatesFilter<"CelebrityHabitTemplate"> | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.IntNullableWithAggregatesFilter<"CelebrityHabitTemplate"> | number | null;
    isPublic?: Prisma.BoolWithAggregatesFilter<"CelebrityHabitTemplate"> | boolean;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"CelebrityHabitTemplate"> | boolean;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"CelebrityHabitTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CelebrityHabitTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CelebrityHabitTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CelebrityHabitTemplate"> | Date | string | null;
};
export type CelebrityHabitTemplateCreateInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutTemplatesInput;
    creator?: Prisma.UserCreateNestedOneWithoutCreatedTemplatesInput;
    items?: Prisma.CelebrityHabitTemplateItemCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUncheckedCreateInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutTemplatesNestedInput;
    creator?: Prisma.UserUpdateOneWithoutCreatedTemplatesNestedInput;
    items?: Prisma.CelebrityHabitTemplateItemUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateCreateManyInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateListRelationFilter = {
    every?: Prisma.CelebrityHabitTemplateWhereInput;
    some?: Prisma.CelebrityHabitTemplateWhereInput;
    none?: Prisma.CelebrityHabitTemplateWhereInput;
};
export type CelebrityHabitTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrityName?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    isPublic?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateAvgOrderByAggregateInput = {
    estimatedMinutes?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrityName?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    isPublic?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    celebrityName?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    isPublic?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateSumOrderByAggregateInput = {
    estimatedMinutes?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateScalarRelationFilter = {
    is?: Prisma.CelebrityHabitTemplateWhereInput;
    isNot?: Prisma.CelebrityHabitTemplateWhereInput;
};
export type CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput> | Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCreatorInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
};
export type CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput> | Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCreatorInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
};
export type CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput> | Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCreatorInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
};
export type CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput> | Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCreatorInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCreatorInput | Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
};
export type CelebrityHabitTemplateCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput> | Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCategoryInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
};
export type CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput> | Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCategoryInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
};
export type CelebrityHabitTemplateUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput> | Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCategoryInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
};
export type CelebrityHabitTemplateUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput> | Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput[] | Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput | Prisma.CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CelebrityHabitTemplateCreateManyCategoryInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput | Prisma.CelebrityHabitTemplateWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCategoryInput | Prisma.CelebrityHabitTemplateUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
};
export type EnumTemplateDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.TemplateDifficulty;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CelebrityHabitTemplateCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutItemsInput;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithoutItemsInput;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateToOneWithWhereWithoutItemsInput, Prisma.CelebrityHabitTemplateUpdateWithoutItemsInput>, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutItemsInput>;
};
export type CelebrityHabitTemplateCreateNestedOneWithoutImportedByUsersInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutImportedByUsersInput>;
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutImportedByUsersInput;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateUpdateOneRequiredWithoutImportedByUsersNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutImportedByUsersInput>;
    connectOrCreate?: Prisma.CelebrityHabitTemplateCreateOrConnectWithoutImportedByUsersInput;
    upsert?: Prisma.CelebrityHabitTemplateUpsertWithoutImportedByUsersInput;
    connect?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateToOneWithWhereWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUpdateWithoutImportedByUsersInput>, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutImportedByUsersInput>;
};
export type CelebrityHabitTemplateCreateWithoutCreatorInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutTemplatesInput;
    items?: Prisma.CelebrityHabitTemplateItemCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateCreateOrConnectWithoutCreatorInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput>;
};
export type CelebrityHabitTemplateCreateManyCreatorInputEnvelope = {
    data: Prisma.CelebrityHabitTemplateCreateManyCreatorInput | Prisma.CelebrityHabitTemplateCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCreatorInput>;
};
export type CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutCreatorInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutCreatorInput>;
};
export type CelebrityHabitTemplateUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.CelebrityHabitTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateManyMutationInput, Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorInput>;
};
export type CelebrityHabitTemplateScalarWhereInput = {
    AND?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateScalarWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateScalarWhereInput | Prisma.CelebrityHabitTemplateScalarWhereInput[];
    id?: Prisma.UuidFilter<"CelebrityHabitTemplate"> | string;
    celebrityName?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    title?: Prisma.StringFilter<"CelebrityHabitTemplate"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplate"> | string | null;
    categoryId?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFilter<"CelebrityHabitTemplate"> | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.IntNullableFilter<"CelebrityHabitTemplate"> | number | null;
    isPublic?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    isFeatured?: Prisma.BoolFilter<"CelebrityHabitTemplate"> | boolean;
    createdBy?: Prisma.UuidNullableFilter<"CelebrityHabitTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplate"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplate"> | Date | string | null;
};
export type CelebrityHabitTemplateCreateWithoutCategoryInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    creator?: Prisma.UserCreateNestedOneWithoutCreatedTemplatesInput;
    items?: Prisma.CelebrityHabitTemplateItemCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedCreateNestedManyWithoutTemplateInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateCreateOrConnectWithoutCategoryInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput>;
};
export type CelebrityHabitTemplateCreateManyCategoryInputEnvelope = {
    data: Prisma.CelebrityHabitTemplateCreateManyCategoryInput | Prisma.CelebrityHabitTemplateCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type CelebrityHabitTemplateUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutCategoryInput>;
};
export type CelebrityHabitTemplateUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutCategoryInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutCategoryInput>;
};
export type CelebrityHabitTemplateUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.CelebrityHabitTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateManyMutationInput, Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCategoryInput>;
};
export type CelebrityHabitTemplateCreateWithoutItemsInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutTemplatesInput;
    creator?: Prisma.UserCreateNestedOneWithoutCreatedTemplatesInput;
    importedByUsers?: Prisma.UserImportedTemplateCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUncheckedCreateWithoutItemsInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateCreateOrConnectWithoutItemsInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutItemsInput>;
};
export type CelebrityHabitTemplateUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutItemsInput>;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
};
export type CelebrityHabitTemplateUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutItemsInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutItemsInput>;
};
export type CelebrityHabitTemplateUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutTemplatesNestedInput;
    creator?: Prisma.UserUpdateOneWithoutCreatedTemplatesNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateCreateWithoutImportedByUsersInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutTemplatesInput;
    creator?: Prisma.UserCreateNestedOneWithoutCreatedTemplatesInput;
    items?: Prisma.CelebrityHabitTemplateItemCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateUncheckedCreateWithoutImportedByUsersInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedCreateNestedManyWithoutTemplateInput;
};
export type CelebrityHabitTemplateCreateOrConnectWithoutImportedByUsersInput = {
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutImportedByUsersInput>;
};
export type CelebrityHabitTemplateUpsertWithoutImportedByUsersInput = {
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutImportedByUsersInput>;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedCreateWithoutImportedByUsersInput>;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
};
export type CelebrityHabitTemplateUpdateToOneWithWhereWithoutImportedByUsersInput = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateWithoutImportedByUsersInput, Prisma.CelebrityHabitTemplateUncheckedUpdateWithoutImportedByUsersInput>;
};
export type CelebrityHabitTemplateUpdateWithoutImportedByUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutTemplatesNestedInput;
    creator?: Prisma.UserUpdateOneWithoutCreatedTemplatesNestedInput;
    items?: Prisma.CelebrityHabitTemplateItemUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateWithoutImportedByUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateCreateManyCreatorInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    categoryId?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutTemplatesNestedInput;
    items?: Prisma.CelebrityHabitTemplateItemUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateCreateManyCategoryInput = {
    id?: string;
    celebrityName: string;
    title: string;
    description?: string | null;
    difficulty?: $Enums.TemplateDifficulty;
    estimatedMinutes?: number | null;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creator?: Prisma.UserUpdateOneWithoutCreatedTemplatesNestedInput;
    items?: Prisma.CelebrityHabitTemplateItemUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    items?: Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateNestedInput;
    importedByUsers?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type CelebrityHabitTemplateUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    celebrityName?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.EnumTemplateDifficultyFieldUpdateOperationsInput | $Enums.TemplateDifficulty;
    estimatedMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isPublic?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateCountOutputType = {
    items: number;
    importedByUsers: number;
};
export type CelebrityHabitTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | CelebrityHabitTemplateCountOutputTypeCountItemsArgs;
    importedByUsers?: boolean | CelebrityHabitTemplateCountOutputTypeCountImportedByUsersArgs;
};
export type CelebrityHabitTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type CelebrityHabitTemplateCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
};
export type CelebrityHabitTemplateCountOutputTypeCountImportedByUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserImportedTemplateWhereInput;
};
export type CelebrityHabitTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    celebrityName?: boolean;
    title?: boolean;
    description?: boolean;
    categoryId?: boolean;
    difficulty?: boolean;
    estimatedMinutes?: boolean;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
    items?: boolean | Prisma.CelebrityHabitTemplate$itemsArgs<ExtArgs>;
    importedByUsers?: boolean | Prisma.CelebrityHabitTemplate$importedByUsersArgs<ExtArgs>;
    _count?: boolean | Prisma.CelebrityHabitTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplate"]>;
export type CelebrityHabitTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    celebrityName?: boolean;
    title?: boolean;
    description?: boolean;
    categoryId?: boolean;
    difficulty?: boolean;
    estimatedMinutes?: boolean;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplate"]>;
export type CelebrityHabitTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    celebrityName?: boolean;
    title?: boolean;
    description?: boolean;
    categoryId?: boolean;
    difficulty?: boolean;
    estimatedMinutes?: boolean;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplate"]>;
export type CelebrityHabitTemplateSelectScalar = {
    id?: boolean;
    celebrityName?: boolean;
    title?: boolean;
    description?: boolean;
    categoryId?: boolean;
    difficulty?: boolean;
    estimatedMinutes?: boolean;
    isPublic?: boolean;
    isFeatured?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type CelebrityHabitTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "celebrityName" | "title" | "description" | "categoryId" | "difficulty" | "estimatedMinutes" | "isPublic" | "isFeatured" | "createdBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["celebrityHabitTemplate"]>;
export type CelebrityHabitTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
    items?: boolean | Prisma.CelebrityHabitTemplate$itemsArgs<ExtArgs>;
    importedByUsers?: boolean | Prisma.CelebrityHabitTemplate$importedByUsersArgs<ExtArgs>;
    _count?: boolean | Prisma.CelebrityHabitTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CelebrityHabitTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
};
export type CelebrityHabitTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>;
};
export type $CelebrityHabitTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CelebrityHabitTemplate";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        creator: Prisma.$UserPayload<ExtArgs> | null;
        items: Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>[];
        importedByUsers: Prisma.$UserImportedTemplatePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        celebrityName: string;
        title: string;
        description: string | null;
        categoryId: string | null;
        difficulty: $Enums.TemplateDifficulty;
        estimatedMinutes: number | null;
        isPublic: boolean;
        isFeatured: boolean;
        createdBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["celebrityHabitTemplate"]>;
    composites: {};
};
export type CelebrityHabitTemplateGetPayload<S extends boolean | null | undefined | CelebrityHabitTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload, S>;
export type CelebrityHabitTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CelebrityHabitTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CelebrityHabitTemplateCountAggregateInputType | true;
};
export interface CelebrityHabitTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CelebrityHabitTemplate'];
        meta: {
            name: 'CelebrityHabitTemplate';
        };
    };
    findUnique<T extends CelebrityHabitTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CelebrityHabitTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CelebrityHabitTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CelebrityHabitTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CelebrityHabitTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CelebrityHabitTemplateCreateArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CelebrityHabitTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CelebrityHabitTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CelebrityHabitTemplateDeleteArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CelebrityHabitTemplateUpdateArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CelebrityHabitTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CelebrityHabitTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CelebrityHabitTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CelebrityHabitTemplateUpsertArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CelebrityHabitTemplateCountArgs>(args?: Prisma.Subset<T, CelebrityHabitTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CelebrityHabitTemplateCountAggregateOutputType> : number>;
    aggregate<T extends CelebrityHabitTemplateAggregateArgs>(args: Prisma.Subset<T, CelebrityHabitTemplateAggregateArgs>): Prisma.PrismaPromise<GetCelebrityHabitTemplateAggregateType<T>>;
    groupBy<T extends CelebrityHabitTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CelebrityHabitTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: CelebrityHabitTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CelebrityHabitTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrityHabitTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CelebrityHabitTemplateFieldRefs;
}
export interface Prisma__CelebrityHabitTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplate$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplate$creatorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.CelebrityHabitTemplate$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplate$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    importedByUsers<T extends Prisma.CelebrityHabitTemplate$importedByUsersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplate$importedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CelebrityHabitTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly celebrityName: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly title: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly description: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly categoryId: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly difficulty: Prisma.FieldRef<"CelebrityHabitTemplate", 'TemplateDifficulty'>;
    readonly estimatedMinutes: Prisma.FieldRef<"CelebrityHabitTemplate", 'Int'>;
    readonly isPublic: Prisma.FieldRef<"CelebrityHabitTemplate", 'Boolean'>;
    readonly isFeatured: Prisma.FieldRef<"CelebrityHabitTemplate", 'Boolean'>;
    readonly createdBy: Prisma.FieldRef<"CelebrityHabitTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CelebrityHabitTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CelebrityHabitTemplate", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"CelebrityHabitTemplate", 'DateTime'>;
}
export type CelebrityHabitTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput | Prisma.CelebrityHabitTemplateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrityHabitTemplateScalarFieldEnum | Prisma.CelebrityHabitTemplateScalarFieldEnum[];
};
export type CelebrityHabitTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput | Prisma.CelebrityHabitTemplateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrityHabitTemplateScalarFieldEnum | Prisma.CelebrityHabitTemplateScalarFieldEnum[];
};
export type CelebrityHabitTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput | Prisma.CelebrityHabitTemplateOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrityHabitTemplateScalarFieldEnum | Prisma.CelebrityHabitTemplateScalarFieldEnum[];
};
export type CelebrityHabitTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateInput, Prisma.CelebrityHabitTemplateUncheckedCreateInput>;
};
export type CelebrityHabitTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CelebrityHabitTemplateCreateManyInput | Prisma.CelebrityHabitTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CelebrityHabitTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    data: Prisma.CelebrityHabitTemplateCreateManyInput | Prisma.CelebrityHabitTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CelebrityHabitTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CelebrityHabitTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateInput, Prisma.CelebrityHabitTemplateUncheckedUpdateInput>;
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateManyMutationInput, Prisma.CelebrityHabitTemplateUncheckedUpdateManyInput>;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    limit?: number;
};
export type CelebrityHabitTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateManyMutationInput, Prisma.CelebrityHabitTemplateUncheckedUpdateManyInput>;
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    limit?: number;
    include?: Prisma.CelebrityHabitTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CelebrityHabitTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateCreateInput, Prisma.CelebrityHabitTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateUpdateInput, Prisma.CelebrityHabitTemplateUncheckedUpdateInput>;
};
export type CelebrityHabitTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateWhereUniqueInput;
};
export type CelebrityHabitTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
    limit?: number;
};
export type CelebrityHabitTemplate$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type CelebrityHabitTemplate$creatorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type CelebrityHabitTemplate$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateItemOrderByWithRelationInput | Prisma.CelebrityHabitTemplateItemOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CelebrityHabitTemplateItemScalarFieldEnum | Prisma.CelebrityHabitTemplateItemScalarFieldEnum[];
};
export type CelebrityHabitTemplate$importedByUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrityHabitTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateInclude<ExtArgs> | null;
};
