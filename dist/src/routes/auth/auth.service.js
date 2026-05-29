"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../shared/services/prisma.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const password_util_1 = require("../../common/utils/password.util");
let AuthService = class AuthService {
    prisma;
    jwt;
    config;
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    sanitizeUser(user) {
        return {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            timezone: user.timezone,
            role: user.role,
            isActive: user.isActive,
            lastLoginAt: user.lastLoginAt,
            createdAt: user.createdAt,
        };
    }
    async signToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            timezone: user.timezone,
        };
        const accessToken = await this.jwt.signAsync(payload);
        return { accessToken, tokenType: 'Bearer' };
    }
    async register(dto) {
        if (!dto.email || !dto.password || !dto.fullName) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.AUTH_BR02, 'Email, password and full name are required');
        }
        if (!(0, password_util_1.isPasswordStrong)(dto.password)) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.AUTH_BR03, password_util_1.PASSWORD_REQUIREMENTS_MESSAGE);
        }
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });
        if (existing && !existing.deletedAt) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.AUTH_BR01, 'Email is already registered', common_1.HttpStatus.CONFLICT);
        }
        const rounds = this.config.get('bcryptRounds') ?? 10;
        const passwordHash = await bcrypt.hash(dto.password, rounds);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email.toLowerCase(),
                passwordHash,
                fullName: dto.fullName.trim(),
                timezone: dto.timezone ?? 'Asia/Ho_Chi_Minh',
            },
        });
        const tokens = await this.signToken(user);
        return {
            user: this.sanitizeUser(user),
            ...tokens,
        };
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });
        if (!user || user.deletedAt) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.UNAUTHORIZED, 'Invalid email or password', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (!user.isActive) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.AUTH_BR04, 'Account is locked. Please contact support.', common_1.HttpStatus.FORBIDDEN);
        }
        const valid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!valid) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.UNAUTHORIZED, 'Invalid email or password', common_1.HttpStatus.UNAUTHORIZED);
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        });
        const tokens = await this.signToken(user);
        return {
            user: this.sanitizeUser({ ...user, lastLoginAt: new Date() }),
            ...tokens,
        };
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findFirst({
            where: { id: userId, deletedAt: null },
        });
        if (!user) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.sanitizeUser(user);
    }
    async updateProfile(userId, dto) {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: {
                ...(dto.fullName !== undefined && { fullName: dto.fullName.trim() }),
                ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            },
        });
        return this.sanitizeUser(user);
    }
    async changePassword(userId, dto) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const valid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
        if (!valid) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.UNAUTHORIZED, 'Current password is incorrect', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (!(0, password_util_1.isPasswordStrong)(dto.newPassword)) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.AUTH_BR03, password_util_1.PASSWORD_REQUIREMENTS_MESSAGE);
        }
        const rounds = this.config.get('bcryptRounds') ?? 10;
        await this.prisma.user.update({
            where: { id: userId },
            data: { passwordHash: await bcrypt.hash(dto.newPassword, rounds) },
        });
        return { message: 'Password updated successfully' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map