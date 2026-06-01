import { UserRole } from "../../generated/prisma/enums";
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { UpdateUserStatusDto, AdminUserQueryDto } from './dto/admin.dto';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    getUser(id: string): Promise<{
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
    updateStatus(admin: RequestUser, id: string, dto: UpdateUserStatusDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        isActive: boolean;
    }>;
    systemStats(): Promise<{
        totalUsers: number;
        activeUsers: number;
        totalHabits: number;
        activeHabits: number;
    }>;
    adminLogs(query: AdminUserQueryDto): Promise<{
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
