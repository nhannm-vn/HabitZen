import { TemplatesService } from './templates.service';
import { RequestUser } from "../../common/interfaces/request-user.interface";
declare class TemplateQueryDto {
    difficulty?: string;
    featured?: boolean;
}
export declare class TemplatesController {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    findAll(query: TemplateQueryDto): Promise<({
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
        _count: {
            importedByUsers: number;
        };
        items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            name: string;
            description: string | null;
            goalType: import("../../generated/prisma/enums").HabitGoalType;
            goalValue: number | null;
            goalUnit: string | null;
            repeatType: import("../../generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
            templateId: string;
            displayOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        categoryId: string | null;
        description: string | null;
        celebrityName: string;
        title: string;
        difficulty: import("../../generated/prisma/enums").TemplateDifficulty;
        estimatedMinutes: number | null;
        isPublic: boolean;
        isFeatured: boolean;
        createdBy: string | null;
    })[]>;
    findOne(id: string): Promise<{
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
        items: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            name: string;
            description: string | null;
            goalType: import("../../generated/prisma/enums").HabitGoalType;
            goalValue: number | null;
            goalUnit: string | null;
            repeatType: import("../../generated/prisma/enums").ScheduleRepeatType;
            repeatConfig: import("@prisma/client/runtime/client").JsonValue | null;
            templateId: string;
            displayOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        categoryId: string | null;
        description: string | null;
        celebrityName: string;
        title: string;
        difficulty: import("../../generated/prisma/enums").TemplateDifficulty;
        estimatedMinutes: number | null;
        isPublic: boolean;
        isFeatured: boolean;
        createdBy: string | null;
    }>;
    import(user: RequestUser, id: string): Promise<{
        templateId: string;
        importedCount: number;
        habits: {
            id: string;
            name: string;
        }[];
    }>;
}
export {};
