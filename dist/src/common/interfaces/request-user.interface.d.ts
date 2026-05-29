import { UserRole } from "../../generated/prisma/enums";
export declare class RequestUser {
    id: string;
    email: string;
    role: UserRole;
    timezone: string;
}
