import { PrismaService } from "../../shared/services/prisma.service";
import { OwnershipService } from "../../shared/services/ownership.service";
import { CreateReminderDto, UpdateReminderDto } from './dto/reminder.dto';
export declare class RemindersService {
    private readonly prisma;
    private readonly ownership;
    constructor(prisma: PrismaService, ownership: OwnershipService);
    private parseTime;
    findByHabit(userId: string, habitId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }[]>;
    create(userId: string, habitId: string, dto: CreateReminderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }>;
    update(userId: string, id: string, dto: UpdateReminderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }>;
    remove(userId: string, id: string): Promise<{
        message: string;
    }>;
    getDueReminders(userId: string, timezone: string): Promise<{
        habitId: string;
        habitName: string;
        reminders: {
            id: string;
            remindAt: Date;
        }[];
    }[]>;
}
