import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/generated/prisma/enums';

export const ROLES_KEY = 'roles';

/**
 * Giới hạn route chỉ cho role cụ thể (thường là admin).
 * Dùng kèm RolesGuard: @Roles(UserRole.admin)
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
