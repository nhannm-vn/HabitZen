import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    timezone: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    timezone: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    fullName: number;
    timezone: number;
    role: number;
    isActive: number;
    lastLoginAt: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    timezone?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    timezone?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    timezone?: true;
    role?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone: string;
    role: $Enums.UserRole;
    isActive: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    timezone?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    categories?: Prisma.CategoryListRelationFilter;
    habits?: Prisma.HabitListRelationFilter;
    habitLogs?: Prisma.HabitLogListRelationFilter;
    reminders?: Prisma.ReminderListRelationFilter;
    streaks?: Prisma.StreakListRelationFilter;
    adminLogs?: Prisma.AdminLogListRelationFilter;
    createdTemplates?: Prisma.CelebrityHabitTemplateListRelationFilter;
    importedTemplates?: Prisma.UserImportedTemplateListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    categories?: Prisma.CategoryOrderByRelationAggregateInput;
    habits?: Prisma.HabitOrderByRelationAggregateInput;
    habitLogs?: Prisma.HabitLogOrderByRelationAggregateInput;
    reminders?: Prisma.ReminderOrderByRelationAggregateInput;
    streaks?: Prisma.StreakOrderByRelationAggregateInput;
    adminLogs?: Prisma.AdminLogOrderByRelationAggregateInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateOrderByRelationAggregateInput;
    importedTemplates?: Prisma.UserImportedTemplateOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    fullName?: Prisma.StringFilter<"User"> | string;
    timezone?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    categories?: Prisma.CategoryListRelationFilter;
    habits?: Prisma.HabitListRelationFilter;
    habitLogs?: Prisma.HabitLogListRelationFilter;
    reminders?: Prisma.ReminderListRelationFilter;
    streaks?: Prisma.StreakListRelationFilter;
    adminLogs?: Prisma.AdminLogListRelationFilter;
    createdTemplates?: Prisma.CelebrityHabitTemplateListRelationFilter;
    importedTemplates?: Prisma.UserImportedTemplateListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    timezone?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCategoriesInput, Prisma.UserUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCategoriesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCategoriesInput, Prisma.UserUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCategoriesInput;
    upsert?: Prisma.UserUpsertWithoutCategoriesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCategoriesInput, Prisma.UserUpdateWithoutCategoriesInput>, Prisma.UserUncheckedUpdateWithoutCategoriesInput>;
};
export type UserCreateNestedOneWithoutHabitsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHabitsInput, Prisma.UserUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHabitsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHabitsInput, Prisma.UserUncheckedCreateWithoutHabitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHabitsInput;
    upsert?: Prisma.UserUpsertWithoutHabitsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHabitsInput, Prisma.UserUpdateWithoutHabitsInput>, Prisma.UserUncheckedUpdateWithoutHabitsInput>;
};
export type UserCreateNestedOneWithoutHabitLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHabitLogsInput, Prisma.UserUncheckedCreateWithoutHabitLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHabitLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHabitLogsInput, Prisma.UserUncheckedCreateWithoutHabitLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHabitLogsInput;
    upsert?: Prisma.UserUpsertWithoutHabitLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHabitLogsInput, Prisma.UserUpdateWithoutHabitLogsInput>, Prisma.UserUncheckedUpdateWithoutHabitLogsInput>;
};
export type UserCreateNestedOneWithoutRemindersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRemindersInput, Prisma.UserUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRemindersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRemindersInput, Prisma.UserUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRemindersInput;
    upsert?: Prisma.UserUpsertWithoutRemindersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRemindersInput, Prisma.UserUpdateWithoutRemindersInput>, Prisma.UserUncheckedUpdateWithoutRemindersInput>;
};
export type UserCreateNestedOneWithoutStreaksInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStreaksInput, Prisma.UserUncheckedCreateWithoutStreaksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStreaksInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStreaksNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStreaksInput, Prisma.UserUncheckedCreateWithoutStreaksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStreaksInput;
    upsert?: Prisma.UserUpsertWithoutStreaksInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStreaksInput, Prisma.UserUpdateWithoutStreaksInput>, Prisma.UserUncheckedUpdateWithoutStreaksInput>;
};
export type UserCreateNestedOneWithoutAdminLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminLogsInput, Prisma.UserUncheckedCreateWithoutAdminLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdminLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdminLogsInput, Prisma.UserUncheckedCreateWithoutAdminLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdminLogsInput;
    upsert?: Prisma.UserUpsertWithoutAdminLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdminLogsInput, Prisma.UserUpdateWithoutAdminLogsInput>, Prisma.UserUncheckedUpdateWithoutAdminLogsInput>;
};
export type UserCreateNestedOneWithoutCreatedTemplatesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedTemplatesInput, Prisma.UserUncheckedCreateWithoutCreatedTemplatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedTemplatesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCreatedTemplatesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedTemplatesInput, Prisma.UserUncheckedCreateWithoutCreatedTemplatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedTemplatesInput;
    upsert?: Prisma.UserUpsertWithoutCreatedTemplatesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedTemplatesInput, Prisma.UserUpdateWithoutCreatedTemplatesInput>, Prisma.UserUncheckedUpdateWithoutCreatedTemplatesInput>;
};
export type UserCreateNestedOneWithoutImportedTemplatesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutImportedTemplatesInput, Prisma.UserUncheckedCreateWithoutImportedTemplatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutImportedTemplatesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutImportedTemplatesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutImportedTemplatesInput, Prisma.UserUncheckedCreateWithoutImportedTemplatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutImportedTemplatesInput;
    upsert?: Prisma.UserUpsertWithoutImportedTemplatesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutImportedTemplatesInput, Prisma.UserUpdateWithoutImportedTemplatesInput>, Prisma.UserUncheckedUpdateWithoutImportedTemplatesInput>;
};
export type UserCreateWithoutCategoriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCategoriesInput, Prisma.UserUncheckedCreateWithoutCategoriesInput>;
};
export type UserUpsertWithoutCategoriesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCategoriesInput, Prisma.UserUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCategoriesInput, Prisma.UserUncheckedCreateWithoutCategoriesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCategoriesInput, Prisma.UserUncheckedUpdateWithoutCategoriesInput>;
};
export type UserUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutHabitsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutHabitsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHabitsInput, Prisma.UserUncheckedCreateWithoutHabitsInput>;
};
export type UserUpsertWithoutHabitsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHabitsInput, Prisma.UserUncheckedUpdateWithoutHabitsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHabitsInput, Prisma.UserUncheckedCreateWithoutHabitsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHabitsInput, Prisma.UserUncheckedUpdateWithoutHabitsInput>;
};
export type UserUpdateWithoutHabitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutHabitLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutHabitLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutHabitLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHabitLogsInput, Prisma.UserUncheckedCreateWithoutHabitLogsInput>;
};
export type UserUpsertWithoutHabitLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHabitLogsInput, Prisma.UserUncheckedUpdateWithoutHabitLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHabitLogsInput, Prisma.UserUncheckedCreateWithoutHabitLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHabitLogsInput, Prisma.UserUncheckedUpdateWithoutHabitLogsInput>;
};
export type UserUpdateWithoutHabitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutHabitLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutRemindersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRemindersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRemindersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRemindersInput, Prisma.UserUncheckedCreateWithoutRemindersInput>;
};
export type UserUpsertWithoutRemindersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRemindersInput, Prisma.UserUncheckedUpdateWithoutRemindersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRemindersInput, Prisma.UserUncheckedCreateWithoutRemindersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRemindersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRemindersInput, Prisma.UserUncheckedUpdateWithoutRemindersInput>;
};
export type UserUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutStreaksInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutStreaksInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutStreaksInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStreaksInput, Prisma.UserUncheckedCreateWithoutStreaksInput>;
};
export type UserUpsertWithoutStreaksInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStreaksInput, Prisma.UserUncheckedUpdateWithoutStreaksInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStreaksInput, Prisma.UserUncheckedCreateWithoutStreaksInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStreaksInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStreaksInput, Prisma.UserUncheckedUpdateWithoutStreaksInput>;
};
export type UserUpdateWithoutStreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutStreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAdminLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAdminLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAdminLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminLogsInput, Prisma.UserUncheckedCreateWithoutAdminLogsInput>;
};
export type UserUpsertWithoutAdminLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdminLogsInput, Prisma.UserUncheckedUpdateWithoutAdminLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdminLogsInput, Prisma.UserUncheckedCreateWithoutAdminLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdminLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdminLogsInput, Prisma.UserUncheckedUpdateWithoutAdminLogsInput>;
};
export type UserUpdateWithoutAdminLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAdminLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreatedTemplatesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    importedTemplates?: Prisma.UserImportedTemplateCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreatedTemplatesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreatedTemplatesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedTemplatesInput, Prisma.UserUncheckedCreateWithoutCreatedTemplatesInput>;
};
export type UserUpsertWithoutCreatedTemplatesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedTemplatesInput, Prisma.UserUncheckedUpdateWithoutCreatedTemplatesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedTemplatesInput, Prisma.UserUncheckedCreateWithoutCreatedTemplatesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedTemplatesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedTemplatesInput, Prisma.UserUncheckedUpdateWithoutCreatedTemplatesInput>;
};
export type UserUpdateWithoutCreatedTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    importedTemplates?: Prisma.UserImportedTemplateUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutImportedTemplatesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutImportedTemplatesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    timezone?: string;
    role?: $Enums.UserRole;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    categories?: Prisma.CategoryUncheckedCreateNestedManyWithoutUserInput;
    habits?: Prisma.HabitUncheckedCreateNestedManyWithoutUserInput;
    habitLogs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserInput;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutUserInput;
    streaks?: Prisma.StreakUncheckedCreateNestedManyWithoutUserInput;
    adminLogs?: Prisma.AdminLogUncheckedCreateNestedManyWithoutAdminInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutImportedTemplatesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutImportedTemplatesInput, Prisma.UserUncheckedCreateWithoutImportedTemplatesInput>;
};
export type UserUpsertWithoutImportedTemplatesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutImportedTemplatesInput, Prisma.UserUncheckedUpdateWithoutImportedTemplatesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutImportedTemplatesInput, Prisma.UserUncheckedCreateWithoutImportedTemplatesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutImportedTemplatesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutImportedTemplatesInput, Prisma.UserUncheckedUpdateWithoutImportedTemplatesInput>;
};
export type UserUpdateWithoutImportedTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutImportedTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    categories?: Prisma.CategoryUncheckedUpdateManyWithoutUserNestedInput;
    habits?: Prisma.HabitUncheckedUpdateManyWithoutUserNestedInput;
    habitLogs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserNestedInput;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutUserNestedInput;
    streaks?: Prisma.StreakUncheckedUpdateManyWithoutUserNestedInput;
    adminLogs?: Prisma.AdminLogUncheckedUpdateManyWithoutAdminNestedInput;
    createdTemplates?: Prisma.CelebrityHabitTemplateUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCountOutputType = {
    categories: number;
    habits: number;
    habitLogs: number;
    reminders: number;
    streaks: number;
    adminLogs: number;
    createdTemplates: number;
    importedTemplates: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs;
    habits?: boolean | UserCountOutputTypeCountHabitsArgs;
    habitLogs?: boolean | UserCountOutputTypeCountHabitLogsArgs;
    reminders?: boolean | UserCountOutputTypeCountRemindersArgs;
    streaks?: boolean | UserCountOutputTypeCountStreaksArgs;
    adminLogs?: boolean | UserCountOutputTypeCountAdminLogsArgs;
    createdTemplates?: boolean | UserCountOutputTypeCountCreatedTemplatesArgs;
    importedTemplates?: boolean | UserCountOutputTypeCountImportedTemplatesArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryWhereInput;
};
export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
};
export type UserCountOutputTypeCountHabitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
};
export type UserCountOutputTypeCountRemindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReminderWhereInput;
};
export type UserCountOutputTypeCountStreaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StreakWhereInput;
};
export type UserCountOutputTypeCountAdminLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminLogWhereInput;
};
export type UserCountOutputTypeCountCreatedTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CelebrityHabitTemplateWhereInput;
};
export type UserCountOutputTypeCountImportedTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserImportedTemplateWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    timezone?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    categories?: boolean | Prisma.User$categoriesArgs<ExtArgs>;
    habits?: boolean | Prisma.User$habitsArgs<ExtArgs>;
    habitLogs?: boolean | Prisma.User$habitLogsArgs<ExtArgs>;
    reminders?: boolean | Prisma.User$remindersArgs<ExtArgs>;
    streaks?: boolean | Prisma.User$streaksArgs<ExtArgs>;
    adminLogs?: boolean | Prisma.User$adminLogsArgs<ExtArgs>;
    createdTemplates?: boolean | Prisma.User$createdTemplatesArgs<ExtArgs>;
    importedTemplates?: boolean | Prisma.User$importedTemplatesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    timezone?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    timezone?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    timezone?: boolean;
    role?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "timezone" | "role" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.User$categoriesArgs<ExtArgs>;
    habits?: boolean | Prisma.User$habitsArgs<ExtArgs>;
    habitLogs?: boolean | Prisma.User$habitLogsArgs<ExtArgs>;
    reminders?: boolean | Prisma.User$remindersArgs<ExtArgs>;
    streaks?: boolean | Prisma.User$streaksArgs<ExtArgs>;
    adminLogs?: boolean | Prisma.User$adminLogsArgs<ExtArgs>;
    createdTemplates?: boolean | Prisma.User$createdTemplatesArgs<ExtArgs>;
    importedTemplates?: boolean | Prisma.User$importedTemplatesArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        categories: Prisma.$CategoryPayload<ExtArgs>[];
        habits: Prisma.$HabitPayload<ExtArgs>[];
        habitLogs: Prisma.$HabitLogPayload<ExtArgs>[];
        reminders: Prisma.$ReminderPayload<ExtArgs>[];
        streaks: Prisma.$StreakPayload<ExtArgs>[];
        adminLogs: Prisma.$AdminLogPayload<ExtArgs>[];
        createdTemplates: Prisma.$CelebrityHabitTemplatePayload<ExtArgs>[];
        importedTemplates: Prisma.$UserImportedTemplatePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        fullName: string;
        timezone: string;
        role: $Enums.UserRole;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categories<T extends Prisma.User$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    habits<T extends Prisma.User$habitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    habitLogs<T extends Prisma.User$habitLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reminders<T extends Prisma.User$remindersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    streaks<T extends Prisma.User$streaksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$streaksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminLogs<T extends Prisma.User$adminLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$adminLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdTemplates<T extends Prisma.User$createdTemplatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CelebrityHabitTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    importedTemplates<T extends Prisma.User$importedTemplatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$importedTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserImportedTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly fullName: Prisma.FieldRef<"User", 'String'>;
    readonly timezone: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type User$habitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$habitLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$remindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$streaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StreakSelect<ExtArgs> | null;
    omit?: Prisma.StreakOmit<ExtArgs> | null;
    include?: Prisma.StreakInclude<ExtArgs> | null;
    where?: Prisma.StreakWhereInput;
    orderBy?: Prisma.StreakOrderByWithRelationInput | Prisma.StreakOrderByWithRelationInput[];
    cursor?: Prisma.StreakWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StreakScalarFieldEnum | Prisma.StreakScalarFieldEnum[];
};
export type User$adminLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$createdTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$importedTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
