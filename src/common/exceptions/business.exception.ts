import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../constants/error-codes';

/**
 * Exception nghiệp vụ — dùng khi vi phạm business rule (không phải lỗi server).
 *
 * GlobalExceptionFilter sẽ chuyển thành JSON:
 * { success: false, error: { code: "AUTH_BR01", message: "..." } }
 */
export class BusinessException extends HttpException {
  constructor(
    public readonly code: ErrorCode,
    message: string,
    status: HttpStatus = HttpStatus.BAD_REQUEST,
    public readonly details?: unknown,
  ) {
    super({ code, message, details }, status);
  }
}
