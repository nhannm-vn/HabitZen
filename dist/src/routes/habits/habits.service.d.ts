import { PrismaService } from "../../shared/services/prisma.service";
import { OwnershipService } from "../../shared/services/ownership.service";
import { HabitStatus, ScheduleRepeatType } from "../../generated/prisma/enums";
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto, UpdateHabitStatusDto } from './dto/update-habit.dto';
import { ScheduleDto } from './dto/schedule.dto';
export declare class HabitsService {
    private readonly prisma;
    private readonly ownership;
    constructor(prisma: PrismaService, ownership: OwnershipService);
    private validateSchedule;
    private habitInclude;
    findAll(userId: string, filters?: {
        status?: HabitStatus;
        categoryId?: string;
    }): Promise<({
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
            repeatType: ScheduleRepeatType;
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
    findOne(userId: string, id: string): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    create(userId: string, dto: CreateHabitDto): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    update(userId: string, id: string, dto: UpdateHabitDto): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    updateStatus(userId: string, id: string, dto: UpdateHabitStatusDto): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    updateSchedule(userId: string, habitId: string, dto: ScheduleDto): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    archive(userId: string, id: string): Promise<{
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
            repeatType: ScheduleRepeatType;
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
    remove(userId: string, id: string): Promise<{
        message: string;
    }>;
}
