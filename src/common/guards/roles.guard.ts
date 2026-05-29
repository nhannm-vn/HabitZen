/**
 * Guard kiểm tra role — dùng sau JwtAuthGuard.
 * Route admin gắn @Roles(UserRole.admin); user thường nhận ADM_BR01.
 */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/generated/prisma/enums';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { BusinessException } from '../exceptions/business.exception';
import { ErrorCodes } from '../constants/error-codes';
import { HttpStatus } from '@nestjs/common';
import { RequestUser } from '../interfaces/request-user.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles?.length) return true;

    const { user } = context.switchToHttp().getRequest<{ user: RequestUser }>();
    if (!requiredRoles.includes(user.role)) {
      throw new BusinessException(
        ErrorCodes.ADM_BR01,
        'You do not have permission to access this resource',
        HttpStatus.FORBIDDEN,
      );
    }
    return true;
  }
}
