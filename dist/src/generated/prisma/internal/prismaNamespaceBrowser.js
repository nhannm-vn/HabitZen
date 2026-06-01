"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.UserImportedTemplateScalarFieldEnum = exports.CelebrityHabitTemplateItemScalarFieldEnum = exports.CelebrityHabitTemplateScalarFieldEnum = exports.AdminLogScalarFieldEnum = exports.StreakScalarFieldEnum = exports.ReminderScalarFieldEnum = exports.HabitLogScalarFieldEnum = exports.ScheduleScalarFieldEnum = exports.HabitScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Category: 'Category',
    Habit: 'Habit',
    Schedule: 'Schedule',
    HabitLog: 'HabitLog',
    Reminder: 'Reminder',
    Streak: 'Streak',
    AdminLog: 'AdminLog',
    CelebrityHabitTemplate: 'CelebrityHabitTemplate',
    CelebrityHabitTemplateItem: 'CelebrityHabitTemplateItem',
    UserImportedTemplate: 'UserImportedTemplate'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    timezone: 'timezone',
    role: 'role',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    color: 'color',
    icon: 'icon',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.HabitScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    goalType: 'goalType',
    goalValue: 'goalValue',
    goalUnit: 'goalUnit',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ScheduleScalarFieldEnum = {
    id: 'id',
    habitId: 'habitId',
    repeatType: 'repeatType',
    repeatConfig: 'repeatConfig',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.HabitLogScalarFieldEnum = {
    id: 'id',
    habitId: 'habitId',
    userId: 'userId',
    logDate: 'logDate',
    status: 'status',
    progressValue: 'progressValue',
    note: 'note',
    checkedInAt: 'checkedInAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ReminderScalarFieldEnum = {
    id: 'id',
    habitId: 'habitId',
    userId: 'userId',
    remindAt: 'remindAt',
    isEnabled: 'isEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.StreakScalarFieldEnum = {
    id: 'id',
    habitId: 'habitId',
    userId: 'userId',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastCompletedDate: 'lastCompletedDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.AdminLogScalarFieldEnum = {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CelebrityHabitTemplateScalarFieldEnum = {
    id: 'id',
    celebrityName: 'celebrityName',
    title: 'title',
    description: 'description',
    categoryId: 'categoryId',
    difficulty: 'difficulty',
    estimatedMinutes: 'estimatedMinutes',
    isPublic: 'isPublic',
    isFeatured: 'isFeatured',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CelebrityHabitTemplateItemScalarFieldEnum = {
    id: 'id',
    templateId: 'templateId',
    name: 'name',
    description: 'description',
    goalType: 'goalType',
    goalValue: 'goalValue',
    goalUnit: 'goalUnit',
    repeatType: 'repeatType',
    repeatConfig: 'repeatConfig',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.UserImportedTemplateScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    templateId: 'templateId',
    importedAt: 'importedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map