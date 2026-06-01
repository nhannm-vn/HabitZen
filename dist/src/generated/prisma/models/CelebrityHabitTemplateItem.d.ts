import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CelebrityHabitTemplateItemModel = runtime.Types.Result.DefaultSelection<Prisma.$CelebrityHabitTemplateItemPayload>;
export type AggregateCelebrityHabitTemplateItem = {
    _count: CelebrityHabitTemplateItemCountAggregateOutputType | null;
    _avg: CelebrityHabitTemplateItemAvgAggregateOutputType | null;
    _sum: CelebrityHabitTemplateItemSumAggregateOutputType | null;
    _min: CelebrityHabitTemplateItemMinAggregateOutputType | null;
    _max: CelebrityHabitTemplateItemMaxAggregateOutputType | null;
};
export type CelebrityHabitTemplateItemAvgAggregateOutputType = {
    goalValue: number | null;
    displayOrder: number | null;
};
export type CelebrityHabitTemplateItemSumAggregateOutputType = {
    goalValue: number | null;
    displayOrder: number | null;
};
export type CelebrityHabitTemplateItemMinAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    name: string | null;
    description: string | null;
    goalType: $Enums.HabitGoalType | null;
    goalValue: number | null;
    goalUnit: string | null;
    repeatType: $Enums.ScheduleRepeatType | null;
    displayOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type CelebrityHabitTemplateItemMaxAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    name: string | null;
    description: string | null;
    goalType: $Enums.HabitGoalType | null;
    goalValue: number | null;
    goalUnit: string | null;
    repeatType: $Enums.ScheduleRepeatType | null;
    displayOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type CelebrityHabitTemplateItemCountAggregateOutputType = {
    id: number;
    templateId: number;
    name: number;
    description: number;
    goalType: number;
    goalValue: number;
    goalUnit: number;
    repeatType: number;
    repeatConfig: number;
    displayOrder: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type CelebrityHabitTemplateItemAvgAggregateInputType = {
    goalValue?: true;
    displayOrder?: true;
};
export type CelebrityHabitTemplateItemSumAggregateInputType = {
    goalValue?: true;
    displayOrder?: true;
};
export type CelebrityHabitTemplateItemMinAggregateInputType = {
    id?: true;
    templateId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    repeatType?: true;
    displayOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type CelebrityHabitTemplateItemMaxAggregateInputType = {
    id?: true;
    templateId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    repeatType?: true;
    displayOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type CelebrityHabitTemplateItemCountAggregateInputType = {
    id?: true;
    templateId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    repeatType?: true;
    repeatConfig?: true;
    displayOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type CelebrityHabitTemplateItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateItemOrderByWithRelationInput | Prisma.CelebrityHabitTemplateItemOrderByWithRelationInput[];
    cursor?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CelebrityHabitTemplateItemCountAggregateInputType;
    _avg?: CelebrityHabitTemplateItemAvgAggregateInputType;
    _sum?: CelebrityHabitTemplateItemSumAggregateInputType;
    _min?: CelebrityHabitTemplateItemMinAggregateInputType;
    _max?: CelebrityHabitTemplateItemMaxAggregateInputType;
};
export type GetCelebrityHabitTemplateItemAggregateType<T extends CelebrityHabitTemplateItemAggregateArgs> = {
    [P in keyof T & keyof AggregateCelebrityHabitTemplateItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCelebrityHabitTemplateItem[P]> : Prisma.GetScalarType<T[P], AggregateCelebrityHabitTemplateItem[P]>;
};
export type CelebrityHabitTemplateItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    orderBy?: Prisma.CelebrityHabitTemplateItemOrderByWithAggregationInput | Prisma.CelebrityHabitTemplateItemOrderByWithAggregationInput[];
    by: Prisma.CelebrityHabitTemplateItemScalarFieldEnum[] | Prisma.CelebrityHabitTemplateItemScalarFieldEnum;
    having?: Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CelebrityHabitTemplateItemCountAggregateInputType | true;
    _avg?: CelebrityHabitTemplateItemAvgAggregateInputType;
    _sum?: CelebrityHabitTemplateItemSumAggregateInputType;
    _min?: CelebrityHabitTemplateItemMinAggregateInputType;
    _max?: CelebrityHabitTemplateItemMaxAggregateInputType;
};
export type CelebrityHabitTemplateItemGroupByOutputType = {
    id: string;
    templateId: string;
    name: string;
    description: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue: number | null;
    goalUnit: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig: runtime.JsonValue | null;
    displayOrder: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: CelebrityHabitTemplateItemCountAggregateOutputType | null;
    _avg: CelebrityHabitTemplateItemAvgAggregateOutputType | null;
    _sum: CelebrityHabitTemplateItemSumAggregateOutputType | null;
    _min: CelebrityHabitTemplateItemMinAggregateOutputType | null;
    _max: CelebrityHabitTemplateItemMaxAggregateOutputType | null;
};
export type GetCelebrityHabitTemplateItemGroupByPayload<T extends CelebrityHabitTemplateItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CelebrityHabitTemplateItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CelebrityHabitTemplateItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CelebrityHabitTemplateItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CelebrityHabitTemplateItemGroupByOutputType[P]>;
}>>;
export type CelebrityHabitTemplateItemWhereInput = {
    AND?: Prisma.CelebrityHabitTemplateItemWhereInput | Prisma.CelebrityHabitTemplateItemWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateItemWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateItemWhereInput | Prisma.CelebrityHabitTemplateItemWhereInput[];
    id?: Prisma.UuidFilter<"CelebrityHabitTemplateItem"> | string;
    templateId?: Prisma.UuidFilter<"CelebrityHabitTemplateItem"> | string;
    name?: Prisma.StringFilter<"CelebrityHabitTemplateItem"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"CelebrityHabitTemplateItem"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableFilter<"CelebrityHabitTemplateItem">;
    displayOrder?: Prisma.IntFilter<"CelebrityHabitTemplateItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplateItem"> | Date | string | null;
    template?: Prisma.XOR<Prisma.CelebrityHabitTemplateScalarRelationFilter, Prisma.CelebrityHabitTemplateWhereInput>;
};
export type CelebrityHabitTemplateItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    template?: Prisma.CelebrityHabitTemplateOrderByWithRelationInput;
};
export type CelebrityHabitTemplateItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CelebrityHabitTemplateItemWhereInput | Prisma.CelebrityHabitTemplateItemWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateItemWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateItemWhereInput | Prisma.CelebrityHabitTemplateItemWhereInput[];
    templateId?: Prisma.UuidFilter<"CelebrityHabitTemplateItem"> | string;
    name?: Prisma.StringFilter<"CelebrityHabitTemplateItem"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"CelebrityHabitTemplateItem"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableFilter<"CelebrityHabitTemplateItem">;
    displayOrder?: Prisma.IntFilter<"CelebrityHabitTemplateItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplateItem"> | Date | string | null;
    template?: Prisma.XOR<Prisma.CelebrityHabitTemplateScalarRelationFilter, Prisma.CelebrityHabitTemplateWhereInput>;
}, "id">;
export type CelebrityHabitTemplateItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CelebrityHabitTemplateItemCountOrderByAggregateInput;
    _avg?: Prisma.CelebrityHabitTemplateItemAvgOrderByAggregateInput;
    _max?: Prisma.CelebrityHabitTemplateItemMaxOrderByAggregateInput;
    _min?: Prisma.CelebrityHabitTemplateItemMinOrderByAggregateInput;
    _sum?: Prisma.CelebrityHabitTemplateItemSumOrderByAggregateInput;
};
export type CelebrityHabitTemplateItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput | Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput | Prisma.CelebrityHabitTemplateItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CelebrityHabitTemplateItem"> | string;
    templateId?: Prisma.UuidWithAggregatesFilter<"CelebrityHabitTemplateItem"> | string;
    name?: Prisma.StringWithAggregatesFilter<"CelebrityHabitTemplateItem"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CelebrityHabitTemplateItem"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeWithAggregatesFilter<"CelebrityHabitTemplateItem"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableWithAggregatesFilter<"CelebrityHabitTemplateItem"> | number | null;
    goalUnit?: Prisma.StringNullableWithAggregatesFilter<"CelebrityHabitTemplateItem"> | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeWithAggregatesFilter<"CelebrityHabitTemplateItem"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableWithAggregatesFilter<"CelebrityHabitTemplateItem">;
    displayOrder?: Prisma.IntWithAggregatesFilter<"CelebrityHabitTemplateItem"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CelebrityHabitTemplateItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CelebrityHabitTemplateItem"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CelebrityHabitTemplateItem"> | Date | string | null;
};
export type CelebrityHabitTemplateItemCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    template: Prisma.CelebrityHabitTemplateCreateNestedOneWithoutItemsInput;
};
export type CelebrityHabitTemplateItemUncheckedCreateInput = {
    id?: string;
    templateId: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    template?: Prisma.CelebrityHabitTemplateUpdateOneRequiredWithoutItemsNestedInput;
};
export type CelebrityHabitTemplateItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemCreateManyInput = {
    id?: string;
    templateId: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemListRelationFilter = {
    every?: Prisma.CelebrityHabitTemplateItemWhereInput;
    some?: Prisma.CelebrityHabitTemplateItemWhereInput;
    none?: Prisma.CelebrityHabitTemplateItemWhereInput;
};
export type CelebrityHabitTemplateItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemAvgOrderByAggregateInput = {
    goalValue?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemSumOrderByAggregateInput = {
    goalValue?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type CelebrityHabitTemplateItemCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput> | Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput[] | Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.CelebrityHabitTemplateItemCreateManyTemplateInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
};
export type CelebrityHabitTemplateItemUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput> | Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput[] | Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.CelebrityHabitTemplateItemCreateManyTemplateInputEnvelope;
    connect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
};
export type CelebrityHabitTemplateItemUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput> | Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput[] | Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.CelebrityHabitTemplateItemUpsertWithWhereUniqueWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.CelebrityHabitTemplateItemCreateManyTemplateInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateItemUpdateWithWhereUniqueWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.CelebrityHabitTemplateItemUpdateManyWithWhereWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateItemScalarWhereInput | Prisma.CelebrityHabitTemplateItemScalarWhereInput[];
};
export type CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput> | Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput[] | Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.CelebrityHabitTemplateItemUpsertWithWhereUniqueWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.CelebrityHabitTemplateItemCreateManyTemplateInputEnvelope;
    set?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    disconnect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    delete?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    connect?: Prisma.CelebrityHabitTemplateItemWhereUniqueInput | Prisma.CelebrityHabitTemplateItemWhereUniqueInput[];
    update?: Prisma.CelebrityHabitTemplateItemUpdateWithWhereUniqueWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.CelebrityHabitTemplateItemUpdateManyWithWhereWithoutTemplateInput | Prisma.CelebrityHabitTemplateItemUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.CelebrityHabitTemplateItemScalarWhereInput | Prisma.CelebrityHabitTemplateItemScalarWhereInput[];
};
export type CelebrityHabitTemplateItemCreateWithoutTemplateInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateItemCreateOrConnectWithoutTemplateInput = {
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput>;
};
export type CelebrityHabitTemplateItemCreateManyTemplateInputEnvelope = {
    data: Prisma.CelebrityHabitTemplateItemCreateManyTemplateInput | Prisma.CelebrityHabitTemplateItemCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type CelebrityHabitTemplateItemUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateWithoutTemplateInput>;
};
export type CelebrityHabitTemplateItemUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateWithoutTemplateInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateWithoutTemplateInput>;
};
export type CelebrityHabitTemplateItemUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.CelebrityHabitTemplateItemScalarWhereInput;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateManyMutationInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateInput>;
};
export type CelebrityHabitTemplateItemScalarWhereInput = {
    AND?: Prisma.CelebrityHabitTemplateItemScalarWhereInput | Prisma.CelebrityHabitTemplateItemScalarWhereInput[];
    OR?: Prisma.CelebrityHabitTemplateItemScalarWhereInput[];
    NOT?: Prisma.CelebrityHabitTemplateItemScalarWhereInput | Prisma.CelebrityHabitTemplateItemScalarWhereInput[];
    id?: Prisma.UuidFilter<"CelebrityHabitTemplateItem"> | string;
    templateId?: Prisma.UuidFilter<"CelebrityHabitTemplateItem"> | string;
    name?: Prisma.StringFilter<"CelebrityHabitTemplateItem"> | string;
    description?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"CelebrityHabitTemplateItem"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"CelebrityHabitTemplateItem"> | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFilter<"CelebrityHabitTemplateItem"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableFilter<"CelebrityHabitTemplateItem">;
    displayOrder?: Prisma.IntFilter<"CelebrityHabitTemplateItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CelebrityHabitTemplateItem"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CelebrityHabitTemplateItem"> | Date | string | null;
};
export type CelebrityHabitTemplateItemCreateManyTemplateInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CelebrityHabitTemplateItemUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CelebrityHabitTemplateItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    displayOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplateItem"]>;
export type CelebrityHabitTemplateItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    displayOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplateItem"]>;
export type CelebrityHabitTemplateItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    displayOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["celebrityHabitTemplateItem"]>;
export type CelebrityHabitTemplateItemSelectScalar = {
    id?: boolean;
    templateId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    displayOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type CelebrityHabitTemplateItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateId" | "name" | "description" | "goalType" | "goalValue" | "goalUnit" | "repeatType" | "repeatConfig" | "displayOrder" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["celebrityHabitTemplateItem"]>;
export type CelebrityHabitTemplateItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type CelebrityHabitTemplateItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type CelebrityHabitTemplateItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>;
};
export type $CelebrityHabitTemplateItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CelebrityHabitTemplateItem";
    objects: {
        template: Prisma.$CelebrityHabitTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateId: string;
        name: string;
        description: string | null;
        goalType: $Enums.HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        repeatType: $Enums.ScheduleRepeatType;
        repeatConfig: runtime.JsonValue | null;
        displayOrder: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["celebrityHabitTemplateItem"]>;
    composites: {};
};
export type CelebrityHabitTemplateItemGetPayload<S extends boolean | null | undefined | CelebrityHabitTemplateItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload, S>;
export type CelebrityHabitTemplateItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CelebrityHabitTemplateItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CelebrityHabitTemplateItemCountAggregateInputType | true;
};
export interface CelebrityHabitTemplateItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CelebrityHabitTemplateItem'];
        meta: {
            name: 'CelebrityHabitTemplateItem';
        };
    };
    findUnique<T extends CelebrityHabitTemplateItemFindUniqueArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CelebrityHabitTemplateItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CelebrityHabitTemplateItemFindFirstArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CelebrityHabitTemplateItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CelebrityHabitTemplateItemFindManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CelebrityHabitTemplateItemCreateArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemCreateArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CelebrityHabitTemplateItemCreateManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CelebrityHabitTemplateItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CelebrityHabitTemplateItemDeleteArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemDeleteArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CelebrityHabitTemplateItemUpdateArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemUpdateArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CelebrityHabitTemplateItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, CelebrityHabitTemplateItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CelebrityHabitTemplateItemUpdateManyArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CelebrityHabitTemplateItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CelebrityHabitTemplateItemUpsertArgs>(args: Prisma.SelectSubset<T, CelebrityHabitTemplateItemUpsertArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateItemClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplateItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CelebrityHabitTemplateItemCountArgs>(args?: Prisma.Subset<T, CelebrityHabitTemplateItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CelebrityHabitTemplateItemCountAggregateOutputType> : number>;
    aggregate<T extends CelebrityHabitTemplateItemAggregateArgs>(args: Prisma.Subset<T, CelebrityHabitTemplateItemAggregateArgs>): Prisma.PrismaPromise<GetCelebrityHabitTemplateItemAggregateType<T>>;
    groupBy<T extends CelebrityHabitTemplateItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CelebrityHabitTemplateItemGroupByArgs['orderBy'];
    } : {
        orderBy?: CelebrityHabitTemplateItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CelebrityHabitTemplateItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebrityHabitTemplateItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CelebrityHabitTemplateItemFieldRefs;
}
export interface Prisma__CelebrityHabitTemplateItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    template<T extends Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CelebrityHabitTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__CelebrityHabitTemplateClient<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CelebrityHabitTemplateItemFieldRefs {
    readonly id: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'String'>;
    readonly templateId: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'String'>;
    readonly name: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'String'>;
    readonly description: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'String'>;
    readonly goalType: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'HabitGoalType'>;
    readonly goalValue: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'Float'>;
    readonly goalUnit: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'String'>;
    readonly repeatType: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'ScheduleRepeatType'>;
    readonly repeatConfig: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'Json'>;
    readonly displayOrder: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"CelebrityHabitTemplateItem", 'DateTime'>;
}
export type CelebrityHabitTemplateItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
};
export type CelebrityHabitTemplateItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
};
export type CelebrityHabitTemplateItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrityHabitTemplateItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrityHabitTemplateItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CelebrityHabitTemplateItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateInput>;
};
export type CelebrityHabitTemplateItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CelebrityHabitTemplateItemCreateManyInput | Prisma.CelebrityHabitTemplateItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CelebrityHabitTemplateItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    data: Prisma.CelebrityHabitTemplateItemCreateManyInput | Prisma.CelebrityHabitTemplateItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CelebrityHabitTemplateItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CelebrityHabitTemplateItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateInput>;
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
};
export type CelebrityHabitTemplateItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateManyMutationInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyInput>;
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    limit?: number;
};
export type CelebrityHabitTemplateItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateManyMutationInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateManyInput>;
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    limit?: number;
    include?: Prisma.CelebrityHabitTemplateItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CelebrityHabitTemplateItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CelebrityHabitTemplateItemCreateInput, Prisma.CelebrityHabitTemplateItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CelebrityHabitTemplateItemUpdateInput, Prisma.CelebrityHabitTemplateItemUncheckedUpdateInput>;
};
export type CelebrityHabitTemplateItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
    where: Prisma.CelebrityHabitTemplateItemWhereUniqueInput;
};
export type CelebrityHabitTemplateItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateItemWhereInput;
    limit?: number;
};
export type CelebrityHabitTemplateItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CelebrityHabitTemplateItemSelect<ExtArgs> | null;
    omit?: Prisma.CelebrityHabitTemplateItemOmit<ExtArgs> | null;
    include?: Prisma.CelebrityHabitTemplateItemInclude<ExtArgs> | null;
};
