import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto, UpdateHabitStatusDto } from './dto/update-habit.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { HabitStatus } from "../../generated/prisma/enums";
import { HabitsService } from './habits.service';
declare class HabitQueryDto {
    status?: HabitStatus;
    categoryId?: string;
}
export declare class HabitsController {
    private readonly habitsService;
    constructor(habitsService: HabitsService);
    findAll(user: RequestUser, query: HabitQueryDto): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    })[]>;
    create(user: RequestUser, dto: CreateHabitDto): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    findOne(user: RequestUser, id: string): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(user: RequestUser, id: string, dto: UpdateHabitDto): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    updateStatus(user: RequestUser, id: string, dto: UpdateHabitStatusDto): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    updateSchedule(user: RequestUser, id: string, dto: ScheduleDto): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string | null;
            name: string;
            color: string | null;
            icon: string | null;
            isDefault: boolean;
        } | null;
        schedule: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            habitId: string;
            repeatType: import("src/generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        reminders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            remindAt: Date;
            isEnabled: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("src/generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    remove(user: RequestUser, id: string): Promise<{
        message: string;
    }>;
}
export {};
