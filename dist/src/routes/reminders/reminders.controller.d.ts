import { CreateReminderDto, UpdateReminderDto } from './dto/reminder.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { RemindersService } from './reminders.service';
export declare class RemindersController {
    private readonly remindersService;
    constructor(remindersService: RemindersService);
    findByHabit(user: RequestUser, habitId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }[]>;
    create(user: RequestUser, habitId: string, dto: CreateReminderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }>;
    getDue(user: RequestUser): Promise<{
        habitId: string;
        habitName: string;
        reminders: {
            id: string;
            remindAt: Date;
        }[];
    }[]>;
    update(user: RequestUser, id: string, dto: UpdateReminderDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        remindAt: Date;
        isEnabled: boolean;
    }>;
    remove(user: RequestUser, id: string): Promise<{
        message: string;
    }>;
}
