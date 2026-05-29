import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestUser } from '../interfaces/request-user.interface';

/**
 * Lấy user đã decode từ JWT — inject vào tham số controller.
 *
 * Ví dụ: getProfile(@CurrentUser() user: RequestUser)
 * Không cần tự parse header Authorization trong từng handler.
 */
export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): RequestUser => {
    const request = ctx.switchToHttp().getRequest<{ user: RequestUser }>();
    return request.user;
  },
);
