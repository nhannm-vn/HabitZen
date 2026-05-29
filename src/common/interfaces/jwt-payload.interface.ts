import { UserRole } from 'src/generated/prisma/enums';

/**
 * Payload bên trong JWT access token.
 * `sub` = user id (chuẩn JWT).
 */
export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  timezone: string;
}
