import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$SchedulePayload>;
export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type ScheduleMinAggregateOutputType = {
    id: string | null;
    habitId: string | null;
    repeatType: $Enums.ScheduleRepeatType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    habitId: string | null;
    repeatType: $Enums.ScheduleRepeatType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ScheduleCountAggregateOutputType = {
    id: number;
    habitId: number;
    repeatType: number;
    repeatConfig: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type ScheduleMinAggregateInputType = {
    id?: true;
    habitId?: true;
    repeatType?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ScheduleMaxAggregateInputType = {
    id?: true;
    habitId?: true;
    repeatType?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ScheduleCountAggregateInputType = {
    id?: true;
    habitId?: true;
    repeatType?: true;
    repeatConfig?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type ScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduleCountAggregateInputType;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedule[P]> : Prisma.GetScalarType<T[P], AggregateSchedule[P]>;
};
export type ScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithAggregationInput | Prisma.ScheduleOrderByWithAggregationInput[];
    by: Prisma.ScheduleScalarFieldEnum[] | Prisma.ScheduleScalarFieldEnum;
    having?: Prisma.ScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type ScheduleGroupByOutputType = {
    id: string;
    habitId: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
}>>;
export type ScheduleWhereInput = {
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    id?: Prisma.UuidFilter<"Schedule"> | string;
    habitId?: Prisma.UuidFilter<"Schedule"> | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFilter<"Schedule"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableFilter<"Schedule">;
    createdAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
};
export type ScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    habit?: Prisma.HabitOrderByWithRelationInput;
};
export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    habitId?: string;
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    repeatType?: Prisma.EnumScheduleRepeatTypeFilter<"Schedule"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableFilter<"Schedule">;
    createdAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
}, "id" | "habitId">;
export type ScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ScheduleCountOrderByAggregateInput;
    _max?: Prisma.ScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ScheduleMinOrderByAggregateInput;
};
export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Schedule"> | string;
    habitId?: Prisma.UuidWithAggregatesFilter<"Schedule"> | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeWithAggregatesFilter<"Schedule"> | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.JsonNullableWithAggregatesFilter<"Schedule">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null;
};
export type ScheduleCreateInput = {
    id?: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    habit: Prisma.HabitCreateNestedOneWithoutScheduleInput;
};
export type ScheduleUncheckedCreateInput = {
    id?: string;
    habitId: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habit?: Prisma.HabitUpdateOneRequiredWithoutScheduleNestedInput;
};
export type ScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ScheduleCreateManyInput = {
    id?: string;
    habitId: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ScheduleNullableScalarRelationFilter = {
    is?: Prisma.ScheduleWhereInput | null;
    isNot?: Prisma.ScheduleWhereInput | null;
};
export type ScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    repeatConfig?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ScheduleCreateNestedOneWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutHabitInput;
    connect?: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUncheckedCreateNestedOneWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutHabitInput;
    connect?: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUpdateOneWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutHabitInput;
    upsert?: Prisma.ScheduleUpsertWithoutHabitInput;
    disconnect?: Prisma.ScheduleWhereInput | boolean;
    delete?: Prisma.ScheduleWhereInput | boolean;
    connect?: Prisma.ScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScheduleUpdateToOneWithWhereWithoutHabitInput, Prisma.ScheduleUpdateWithoutHabitInput>, Prisma.ScheduleUncheckedUpdateWithoutHabitInput>;
};
export type ScheduleUncheckedUpdateOneWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutHabitInput;
    upsert?: Prisma.ScheduleUpsertWithoutHabitInput;
    disconnect?: Prisma.ScheduleWhereInput | boolean;
    delete?: Prisma.ScheduleWhereInput | boolean;
    connect?: Prisma.ScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScheduleUpdateToOneWithWhereWithoutHabitInput, Prisma.ScheduleUpdateWithoutHabitInput>, Prisma.ScheduleUncheckedUpdateWithoutHabitInput>;
};
export type EnumScheduleRepeatTypeFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleRepeatType;
};
export type ScheduleCreateWithoutHabitInput = {
    id?: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ScheduleUncheckedCreateWithoutHabitInput = {
    id?: string;
    repeatType: $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ScheduleCreateOrConnectWithoutHabitInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
};
export type ScheduleUpsertWithoutHabitInput = {
    update: Prisma.XOR<Prisma.ScheduleUpdateWithoutHabitInput, Prisma.ScheduleUncheckedUpdateWithoutHabitInput>;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutHabitInput, Prisma.ScheduleUncheckedCreateWithoutHabitInput>;
    where?: Prisma.ScheduleWhereInput;
};
export type ScheduleUpdateToOneWithWhereWithoutHabitInput = {
    where?: Prisma.ScheduleWhereInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateWithoutHabitInput, Prisma.ScheduleUncheckedUpdateWithoutHabitInput>;
};
export type ScheduleUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ScheduleUncheckedUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumScheduleRepeatTypeFieldUpdateOperationsInput | $Enums.ScheduleRepeatType;
    repeatConfig?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectScalar = {
    id?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    repeatConfig?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type ScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "habitId" | "repeatType" | "repeatConfig" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["schedule"]>;
export type ScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
};
export type $SchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Schedule";
    objects: {
        habit: Prisma.$HabitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        habitId: string;
        repeatType: $Enums.ScheduleRepeatType;
        repeatConfig: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["schedule"]>;
    composites: {};
};
export type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchedulePayload, S>;
export type ScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduleCountAggregateInputType | true;
};
export interface ScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Schedule'];
        meta: {
            name: 'Schedule';
        };
    };
    findUnique<T extends ScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduleCreateArgs>(args: Prisma.SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduleCountArgs>(args?: Prisma.Subset<T, ScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ScheduleAggregateArgs>(args: Prisma.Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;
    groupBy<T extends ScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduleFieldRefs;
}
export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    habit<T extends Prisma.HabitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HabitDefaultArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"Schedule", 'String'>;
    readonly habitId: Prisma.FieldRef<"Schedule", 'String'>;
    readonly repeatType: Prisma.FieldRef<"Schedule", 'ScheduleRepeatType'>;
    readonly repeatConfig: Prisma.FieldRef<"Schedule", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Schedule", 'DateTime'>;
}
export type ScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
};
export type ScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
    include?: Prisma.ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
};
export type ScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
};
