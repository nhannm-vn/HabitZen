import { SetMetadata } from '@nestjs/common';

/** Key metadata để JwtAuthGuard biết route này bỏ qua kiểm tra token */
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Đánh dấu route công khai (register, login, health).
 * Dùng: @Public() trên method controller.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
