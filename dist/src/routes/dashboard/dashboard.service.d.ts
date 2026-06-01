import { PrismaService } from "../../shared/services/prisma.service";
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getToday(userId: string, timezone: string, date?: string): Promise<{
        date: string;
        summary: {
            total: number;
            completed: number;
            pending: number;
            partial: number;
            skipped: number;
        };
        habits: {
            habit: Record<string, unknown>;
            log: Record<string, unknown>;
        }[];
    }>;
}
