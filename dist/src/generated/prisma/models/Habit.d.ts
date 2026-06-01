import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HabitModel = runtime.Types.Result.DefaultSelection<Prisma.$HabitPayload>;
export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null;
    _avg: HabitAvgAggregateOutputType | null;
    _sum: HabitSumAggregateOutputType | null;
    _min: HabitMinAggregateOutputType | null;
    _max: HabitMaxAggregateOutputType | null;
};
export type HabitAvgAggregateOutputType = {
    goalValue: number | null;
};
export type HabitSumAggregateOutputType = {
    goalValue: number | null;
};
export type HabitMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    name: string | null;
    description: string | null;
    goalType: $Enums.HabitGoalType | null;
    goalValue: number | null;
    goalUnit: string | null;
    status: $Enums.HabitStatus | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type HabitMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    categoryId: string | null;
    name: string | null;
    description: string | null;
    goalType: $Enums.HabitGoalType | null;
    goalValue: number | null;
    goalUnit: string | null;
    status: $Enums.HabitStatus | null;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type HabitCountAggregateOutputType = {
    id: number;
    userId: number;
    categoryId: number;
    name: number;
    description: number;
    goalType: number;
    goalValue: number;
    goalUnit: number;
    status: number;
    startDate: number;
    endDate: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type HabitAvgAggregateInputType = {
    goalValue?: true;
};
export type HabitSumAggregateInputType = {
    goalValue?: true;
};
export type HabitMinAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type HabitMaxAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type HabitCountAggregateInputType = {
    id?: true;
    userId?: true;
    categoryId?: true;
    name?: true;
    description?: true;
    goalType?: true;
    goalValue?: true;
    goalUnit?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type HabitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitCountAggregateInputType;
    _avg?: HabitAvgAggregateInputType;
    _sum?: HabitSumAggregateInputType;
    _min?: HabitMinAggregateInputType;
    _max?: HabitMaxAggregateInputType;
};
export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
    [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabit[P]> : Prisma.GetScalarType<T[P], AggregateHabit[P]>;
};
export type HabitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithAggregationInput | Prisma.HabitOrderByWithAggregationInput[];
    by: Prisma.HabitScalarFieldEnum[] | Prisma.HabitScalarFieldEnum;
    having?: Prisma.HabitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitCountAggregateInputType | true;
    _avg?: HabitAvgAggregateInputType;
    _sum?: HabitSumAggregateInputType;
    _min?: HabitMinAggregateInputType;
    _max?: HabitMaxAggregateInputType;
};
export type HabitGroupByOutputType = {
    id: string;
    userId: string;
    categoryId: string | null;
    name: string;
    description: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue: number | null;
    goalUnit: string | null;
    status: $Enums.HabitStatus;
    startDate: Date;
    endDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: HabitCountAggregateOutputType | null;
    _avg: HabitAvgAggregateOutputType | null;
    _sum: HabitSumAggregateOutputType | null;
    _min: HabitMinAggregateOutputType | null;
    _max: HabitMaxAggregateOutputType | null;
};
export type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitGroupByOutputType[P]>;
}>>;
export type HabitWhereInput = {
    AND?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    OR?: Prisma.HabitWhereInput[];
    NOT?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    id?: Prisma.UuidFilter<"Habit"> | string;
    userId?: Prisma.UuidFilter<"Habit"> | string;
    categoryId?: Prisma.UuidNullableFilter<"Habit"> | string | null;
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"Habit"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"Habit"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"Habit"> | string | null;
    status?: Prisma.EnumHabitStatusFilter<"Habit"> | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.ScheduleWhereInput> | null;
    logs?: Prisma.HabitLogListRelationFilter;
    reminders?: Prisma.ReminderListRelationFilter;
    streak?: Prisma.XOR<Prisma.StreakNullableScalarRelationFilter, Prisma.StreakWhereInput> | null;
};
export type HabitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    schedule?: Prisma.ScheduleOrderByWithRelationInput;
    logs?: Prisma.HabitLogOrderByRelationAggregateInput;
    reminders?: Prisma.ReminderOrderByRelationAggregateInput;
    streak?: Prisma.StreakOrderByWithRelationInput;
};
export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    OR?: Prisma.HabitWhereInput[];
    NOT?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    userId?: Prisma.UuidFilter<"Habit"> | string;
    categoryId?: Prisma.UuidNullableFilter<"Habit"> | string | null;
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"Habit"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"Habit"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"Habit"> | string | null;
    status?: Prisma.EnumHabitStatusFilter<"Habit"> | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.ScheduleWhereInput> | null;
    logs?: Prisma.HabitLogListRelationFilter;
    reminders?: Prisma.ReminderListRelationFilter;
    streak?: Prisma.XOR<Prisma.StreakNullableScalarRelationFilter, Prisma.StreakWhereInput> | null;
}, "id">;
export type HabitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    goalUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.HabitCountOrderByAggregateInput;
    _avg?: Prisma.HabitAvgOrderByAggregateInput;
    _max?: Prisma.HabitMaxOrderByAggregateInput;
    _min?: Prisma.HabitMinOrderByAggregateInput;
    _sum?: Prisma.HabitSumOrderByAggregateInput;
};
export type HabitScalarWhereWithAggregatesInput = {
    AND?: Prisma.HabitScalarWhereWithAggregatesInput | Prisma.HabitScalarWhereWithAggregatesInput[];
    OR?: Prisma.HabitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HabitScalarWhereWithAggregatesInput | Prisma.HabitScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Habit"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Habit"> | string;
    categoryId?: Prisma.UuidNullableWithAggregatesFilter<"Habit"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Habit"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Habit"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeWithAggregatesFilter<"Habit"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableWithAggregatesFilter<"Habit"> | number | null;
    goalUnit?: Prisma.StringNullableWithAggregatesFilter<"Habit"> | string | null;
    status?: Prisma.EnumHabitStatusWithAggregatesFilter<"Habit"> | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Habit"> | Date | string;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Habit"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Habit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Habit"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Habit"> | Date | string | null;
};
export type HabitCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitCreateManyInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitListRelationFilter = {
    every?: Prisma.HabitWhereInput;
    some?: Prisma.HabitWhereInput;
    none?: Prisma.HabitWhereInput;
};
export type HabitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HabitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitAvgOrderByAggregateInput = {
    goalValue?: Prisma.SortOrder;
};
export type HabitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    goalType?: Prisma.SortOrder;
    goalValue?: Prisma.SortOrder;
    goalUnit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitSumOrderByAggregateInput = {
    goalValue?: Prisma.SortOrder;
};
export type HabitScalarRelationFilter = {
    is?: Prisma.HabitWhereInput;
    isNot?: Prisma.HabitWhereInput;
};
export type HabitCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput> | Prisma.HabitCreateWithoutUserInput[] | Prisma.HabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserInput | Prisma.HabitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HabitCreateManyUserInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput> | Prisma.HabitCreateWithoutUserInput[] | Prisma.HabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserInput | Prisma.HabitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HabitCreateManyUserInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput> | Prisma.HabitCreateWithoutUserInput[] | Prisma.HabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserInput | Prisma.HabitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutUserInput | Prisma.HabitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HabitCreateManyUserInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutUserInput | Prisma.HabitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutUserInput | Prisma.HabitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput> | Prisma.HabitCreateWithoutUserInput[] | Prisma.HabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserInput | Prisma.HabitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutUserInput | Prisma.HabitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HabitCreateManyUserInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutUserInput | Prisma.HabitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutUserInput | Prisma.HabitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type HabitCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutCategoryInput | Prisma.HabitUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type HabitUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutCategoryInput | Prisma.HabitUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type EnumHabitGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.HabitGoalType;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumHabitStatusFieldUpdateOperationsInput = {
    set?: $Enums.HabitStatus;
};
export type HabitCreateNestedOneWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutScheduleInput, Prisma.HabitUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutScheduleInput, Prisma.HabitUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutScheduleInput;
    upsert?: Prisma.HabitUpsertWithoutScheduleInput;
    connect?: Prisma.HabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HabitUpdateToOneWithWhereWithoutScheduleInput, Prisma.HabitUpdateWithoutScheduleInput>, Prisma.HabitUncheckedUpdateWithoutScheduleInput>;
};
export type HabitCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutLogsInput, Prisma.HabitUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutLogsInput;
    connect?: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutLogsInput, Prisma.HabitUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.HabitUpsertWithoutLogsInput;
    connect?: Prisma.HabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HabitUpdateToOneWithWhereWithoutLogsInput, Prisma.HabitUpdateWithoutLogsInput>, Prisma.HabitUncheckedUpdateWithoutLogsInput>;
};
export type HabitCreateNestedOneWithoutRemindersInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutRemindersInput, Prisma.HabitUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutRemindersInput;
    connect?: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutRemindersInput, Prisma.HabitUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutRemindersInput;
    upsert?: Prisma.HabitUpsertWithoutRemindersInput;
    connect?: Prisma.HabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HabitUpdateToOneWithWhereWithoutRemindersInput, Prisma.HabitUpdateWithoutRemindersInput>, Prisma.HabitUncheckedUpdateWithoutRemindersInput>;
};
export type HabitCreateNestedOneWithoutStreakInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutStreakInput, Prisma.HabitUncheckedCreateWithoutStreakInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutStreakInput;
    connect?: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateOneRequiredWithoutStreakNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutStreakInput, Prisma.HabitUncheckedCreateWithoutStreakInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutStreakInput;
    upsert?: Prisma.HabitUpsertWithoutStreakInput;
    connect?: Prisma.HabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HabitUpdateToOneWithWhereWithoutStreakInput, Prisma.HabitUpdateWithoutStreakInput>, Prisma.HabitUncheckedUpdateWithoutStreakInput>;
};
export type HabitCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutUserInput = {
    id?: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutUserInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput>;
};
export type HabitCreateManyUserInputEnvelope = {
    data: Prisma.HabitCreateManyUserInput | Prisma.HabitCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HabitWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitUpdateWithoutUserInput, Prisma.HabitUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutUserInput, Prisma.HabitUncheckedCreateWithoutUserInput>;
};
export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutUserInput, Prisma.HabitUncheckedUpdateWithoutUserInput>;
};
export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HabitScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyWithoutUserInput>;
};
export type HabitScalarWhereInput = {
    AND?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
    OR?: Prisma.HabitScalarWhereInput[];
    NOT?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
    id?: Prisma.UuidFilter<"Habit"> | string;
    userId?: Prisma.UuidFilter<"Habit"> | string;
    categoryId?: Prisma.UuidNullableFilter<"Habit"> | string | null;
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFilter<"Habit"> | $Enums.HabitGoalType;
    goalValue?: Prisma.FloatNullableFilter<"Habit"> | number | null;
    goalUnit?: Prisma.StringNullableFilter<"Habit"> | string | null;
    status?: Prisma.EnumHabitStatusFilter<"Habit"> | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Habit"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
};
export type HabitCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutCategoryInput = {
    id?: string;
    userId: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput>;
};
export type HabitCreateManyCategoryInputEnvelope = {
    data: Prisma.HabitCreateManyCategoryInput | Prisma.HabitCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type HabitUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitUpdateWithoutCategoryInput, Prisma.HabitUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput>;
};
export type HabitUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutCategoryInput, Prisma.HabitUncheckedUpdateWithoutCategoryInput>;
};
export type HabitUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.HabitScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyWithoutCategoryInput>;
};
export type HabitCreateWithoutScheduleInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutScheduleInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutScheduleInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutScheduleInput, Prisma.HabitUncheckedCreateWithoutScheduleInput>;
};
export type HabitUpsertWithoutScheduleInput = {
    update: Prisma.XOR<Prisma.HabitUpdateWithoutScheduleInput, Prisma.HabitUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutScheduleInput, Prisma.HabitUncheckedCreateWithoutScheduleInput>;
    where?: Prisma.HabitWhereInput;
};
export type HabitUpdateToOneWithWhereWithoutScheduleInput = {
    where?: Prisma.HabitWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutScheduleInput, Prisma.HabitUncheckedUpdateWithoutScheduleInput>;
};
export type HabitUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitCreateWithoutLogsInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutLogsInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutLogsInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutLogsInput, Prisma.HabitUncheckedCreateWithoutLogsInput>;
};
export type HabitUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.HabitUpdateWithoutLogsInput, Prisma.HabitUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutLogsInput, Prisma.HabitUncheckedCreateWithoutLogsInput>;
    where?: Prisma.HabitWhereInput;
};
export type HabitUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.HabitWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutLogsInput, Prisma.HabitUncheckedUpdateWithoutLogsInput>;
};
export type HabitUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitCreateWithoutRemindersInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutRemindersInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    streak?: Prisma.StreakUncheckedCreateNestedOneWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutRemindersInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutRemindersInput, Prisma.HabitUncheckedCreateWithoutRemindersInput>;
};
export type HabitUpsertWithoutRemindersInput = {
    update: Prisma.XOR<Prisma.HabitUpdateWithoutRemindersInput, Prisma.HabitUncheckedUpdateWithoutRemindersInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutRemindersInput, Prisma.HabitUncheckedCreateWithoutRemindersInput>;
    where?: Prisma.HabitWhereInput;
};
export type HabitUpdateToOneWithWhereWithoutRemindersInput = {
    where?: Prisma.HabitWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutRemindersInput, Prisma.HabitUncheckedUpdateWithoutRemindersInput>;
};
export type HabitUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitCreateWithoutStreakInput = {
    id?: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitsInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutStreakInput = {
    id?: string;
    userId: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutHabitInput;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutHabitInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutStreakInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutStreakInput, Prisma.HabitUncheckedCreateWithoutStreakInput>;
};
export type HabitUpsertWithoutStreakInput = {
    update: Prisma.XOR<Prisma.HabitUpdateWithoutStreakInput, Prisma.HabitUncheckedUpdateWithoutStreakInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutStreakInput, Prisma.HabitUncheckedCreateWithoutStreakInput>;
    where?: Prisma.HabitWhereInput;
};
export type HabitUpdateToOneWithWhereWithoutStreakInput = {
    where?: Prisma.HabitWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutStreakInput, Prisma.HabitUncheckedUpdateWithoutStreakInput>;
};
export type HabitUpdateWithoutStreakInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutStreakInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
};
export type HabitCreateManyUserInput = {
    id?: string;
    categoryId?: string | null;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitCreateManyCategoryInput = {
    id?: string;
    userId: string;
    name: string;
    description?: string | null;
    goalType: $Enums.HabitGoalType;
    goalValue?: number | null;
    goalUnit?: string | null;
    status?: $Enums.HabitStatus;
    startDate: Date | string;
    endDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type HabitUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutHabitNestedInput;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutHabitNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutHabitNestedInput;
    streak?: Prisma.StreakUncheckedUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    goalType?: Prisma.EnumHabitGoalTypeFieldUpdateOperationsInput | $Enums.HabitGoalType;
    goalValue?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    goalUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumHabitStatusFieldUpdateOperationsInput | $Enums.HabitStatus;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitCountOutputType = {
    logs: number;
    reminders: number;
};
export type HabitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | HabitCountOutputTypeCountLogsArgs;
    reminders?: boolean | HabitCountOutputTypeCountRemindersArgs;
};
export type HabitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitCountOutputTypeSelect<ExtArgs> | null;
};
export type HabitCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
};
export type HabitCountOutputTypeCountRemindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReminderWhereInput;
};
export type HabitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    status?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
    schedule?: boolean | Prisma.Habit$scheduleArgs<ExtArgs>;
    logs?: boolean | Prisma.Habit$logsArgs<ExtArgs>;
    reminders?: boolean | Prisma.Habit$remindersArgs<ExtArgs>;
    streak?: boolean | Prisma.Habit$streakArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    status?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    status?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectScalar = {
    id?: boolean;
    userId?: boolean;
    categoryId?: boolean;
    name?: boolean;
    description?: boolean;
    goalType?: boolean;
    goalValue?: boolean;
    goalUnit?: boolean;
    status?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type HabitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "categoryId" | "name" | "description" | "goalType" | "goalValue" | "goalUnit" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["habit"]>;
export type HabitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
    schedule?: boolean | Prisma.Habit$scheduleArgs<ExtArgs>;
    logs?: boolean | Prisma.Habit$logsArgs<ExtArgs>;
    reminders?: boolean | Prisma.Habit$remindersArgs<ExtArgs>;
    streak?: boolean | Prisma.Habit$streakArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HabitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
};
export type HabitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
};
export type $HabitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Habit";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        schedule: Prisma.$SchedulePayload<ExtArgs> | null;
        logs: Prisma.$HabitLogPayload<ExtArgs>[];
        reminders: Prisma.$ReminderPayload<ExtArgs>[];
        streak: Prisma.$StreakPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        categoryId: string | null;
        name: string;
        description: string | null;
        goalType: $Enums.HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: $Enums.HabitStatus;
        startDate: Date;
        endDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["habit"]>;
    composites: {};
};
export type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HabitPayload, S>;
export type HabitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitCountAggregateInputType | true;
};
export interface HabitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Habit'];
        meta: {
            name: 'Habit';
        };
    };
    findUnique<T extends HabitFindUniqueArgs>(args: Prisma.SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HabitFindFirstArgs>(args?: Prisma.SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HabitFindManyArgs>(args?: Prisma.SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HabitCreateArgs>(args: Prisma.SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HabitCreateManyArgs>(args?: Prisma.SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HabitDeleteArgs>(args: Prisma.SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HabitUpdateArgs>(args: Prisma.SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HabitDeleteManyArgs>(args?: Prisma.SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HabitUpdateManyArgs>(args: Prisma.SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HabitUpsertArgs>(args: Prisma.SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HabitCountArgs>(args?: Prisma.Subset<T, HabitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitCountAggregateOutputType> : number>;
    aggregate<T extends HabitAggregateArgs>(args: Prisma.Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>;
    groupBy<T extends HabitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HabitGroupByArgs['orderBy'];
    } : {
        orderBy?: HabitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HabitFieldRefs;
}
export interface Prisma__HabitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Habit$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    schedule<T extends Prisma.Habit$scheduleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$scheduleArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    logs<T extends Prisma.Habit$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reminders<T extends Prisma.Habit$remindersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    streak<T extends Prisma.Habit$streakArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$streakArgs<ExtArgs>>): Prisma.Prisma__StreakClient<runtime.Types.Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HabitFieldRefs {
    readonly id: Prisma.FieldRef<"Habit", 'String'>;
    readonly userId: Prisma.FieldRef<"Habit", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Habit", 'String'>;
    readonly name: Prisma.FieldRef<"Habit", 'String'>;
    readonly description: Prisma.FieldRef<"Habit", 'String'>;
    readonly goalType: Prisma.FieldRef<"Habit", 'HabitGoalType'>;
    readonly goalValue: Prisma.FieldRef<"Habit", 'Float'>;
    readonly goalUnit: Prisma.FieldRef<"Habit", 'String'>;
    readonly status: Prisma.FieldRef<"Habit", 'HabitStatus'>;
    readonly startDate: Prisma.FieldRef<"Habit", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Habit", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Habit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Habit", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Habit", 'DateTime'>;
}
export type HabitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitCreateInput, Prisma.HabitUncheckedCreateInput>;
};
export type HabitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HabitCreateManyInput | Prisma.HabitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HabitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    data: Prisma.HabitCreateManyInput | Prisma.HabitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HabitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HabitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitUpdateInput, Prisma.HabitUncheckedUpdateInput>;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyInput>;
    where?: Prisma.HabitWhereInput;
    limit?: number;
};
export type HabitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyInput>;
    where?: Prisma.HabitWhereInput;
    limit?: number;
    include?: Prisma.HabitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HabitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateInput, Prisma.HabitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HabitUpdateInput, Prisma.HabitUncheckedUpdateInput>;
};
export type HabitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    limit?: number;
};
export type Habit$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type Habit$scheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
};
export type Habit$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Habit$remindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReminderSelect<ExtArgs> | null;
    omit?: Prisma.ReminderOmit<ExtArgs> | null;
    include?: Prisma.ReminderInclude<ExtArgs> | null;
    where?: Prisma.ReminderWhereInput;
    orderBy?: Prisma.ReminderOrderByWithRelationInput | Prisma.ReminderOrderByWithRelationInput[];
    cursor?: Prisma.ReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReminderScalarFieldEnum | Prisma.ReminderScalarFieldEnum[];
};
export type Habit$streakArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StreakSelect<ExtArgs> | null;
    omit?: Prisma.StreakOmit<ExtArgs> | null;
    include?: Prisma.StreakInclude<ExtArgs> | null;
    where?: Prisma.StreakWhereInput;
};
export type HabitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
};
