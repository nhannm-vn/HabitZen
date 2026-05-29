import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        tokenType: "Bearer";
        user: {
            id: string;
            email: string;
            fullName: string;
            timezone: string;
            role: string;
            isActive: boolean;
            lastLoginAt: Date | null;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        tokenType: "Bearer";
        user: {
            id: string;
            email: string;
            fullName: string;
            timezone: string;
            role: string;
            isActive: boolean;
            lastLoginAt: Date | null;
            createdAt: Date;
        };
    }>;
    getMe(user: RequestUser): Promise<{
        id: string;
        email: string;
        fullName: string;
        timezone: string;
        role: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
    }>;
    updateMe(user: RequestUser, dto: UpdateProfileDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        timezone: string;
        role: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
    }>;
    changePassword(user: RequestUser, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
