import { UserRole } from 'src/generated/prisma/enums';

/**
 * Dữ liệu user gắn vào request sau khi JwtStrategy validate token.
 * Dùng class (không phải interface) để Nest emit metadata cho decorator.
 */
export class RequestUser {
  id!: string;
  email!: string;
  role!: UserRole;
  /** Múi giờ IANA — dùng tính "hôm nay" cho dashboard và check-in */
  timezone!: string;
}
