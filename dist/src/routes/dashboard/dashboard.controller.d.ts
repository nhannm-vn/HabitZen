import { DashboardQueryDto } from './dto/dashboard-query.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getToday(user: RequestUser, query: DashboardQueryDto): Promise<{
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
