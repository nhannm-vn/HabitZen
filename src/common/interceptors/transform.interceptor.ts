/**
 * Interceptor bọc response thành công theo chuẩn API HabitZen.
 * Mobile chỉ cần đọc `response.data` sau khi parse JSON.
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
