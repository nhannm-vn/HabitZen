import { PrismaService } from "../../shared/services/prisma.service";
import { UserRole } from "../../generated/prisma/enums";
import { UpdateUserStatusDto, AdminUserQueryDto } from './dto/admin.dto';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private logAction;
    listUsers(query: AdminUserQueryDto): Promise<{
        items: {
            id: string;
            email: string;
            fullName: string;
            role: UserRole;
            isActive: boolean;
            lastLoginAt: Date | null;
            createdAt: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getUser(userId: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        timezone: string;
        role: UserRole;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        _count: {
            habits: number;
        };
    }>;
    updateUserStatus(adminId: string, userId: string, dto: UpdateUserStatusDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        isActive: boolean;
    }>;
    getSystemStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        totalHabits: number;
        activeHabits: number;
    }>;
    getAdminLogs(page?: number, limit?: number): Promise<{
        items: ({
            admin: {
                id: string;
                email: string;
                fullName: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            adminId: string;
            action: string;
            targetType: string | null;
            targetId: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
}
