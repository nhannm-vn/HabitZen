/**
 * Bộ lọc exception toàn cục — chuẩn hóa MỌI lỗi về một format JSON cho mobile.
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { BusinessException } from '../exceptions/business.exception';
import { ErrorCodes } from '../constants/error-codes';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code: string = ErrorCodes.INTERNAL_ERROR;
    let message = 'Internal server error';
    let details: unknown;

    // --- Lỗi nghiệp vụ do ta chủ động throw ---
    if (exception instanceof BusinessException) {
      status = exception.getStatus();
      const body = exception.getResponse() as {
        code: string;
        message: string;
        details?: unknown;
      };
      code = body.code;
      message = body.message;
      details = body.details;
    } else if (exception instanceof HttpException) {
      // --- Lỗi HTTP Nest (Unauthorized, NotFound, ValidationPipe, ...) ---
      status = exception.getStatus();
      const body = exception.getResponse();
      if (typeof body === 'object' && body !== null) {
        const obj = body as Record<string, unknown>;
        if (Array.isArray(obj.message)) {
          // class-validator trả mảng message
          code = ErrorCodes.VALIDATION_ERROR;
          message = 'Validation failed';
          details = obj.message;
        } else {
          message = (obj.message as string) ?? message;
          code =
            status === HttpStatus.UNAUTHORIZED
              ? ErrorCodes.UNAUTHORIZED
              : status === HttpStatus.FORBIDDEN
                ? ErrorCodes.FORBIDDEN
                : status === HttpStatus.NOT_FOUND
                  ? ErrorCodes.NOT_FOUND
                  : status === HttpStatus.CONFLICT
                    ? ErrorCodes.CONFLICT
                    : ErrorCodes.VALIDATION_ERROR;
        }
      } else {
        message = String(body);
      }
    } else if (exception instanceof Error) {
      // Lỗi không mong đợi — ghi log stack để debug
      this.logger.error(exception.message, exception.stack);
    }

    response.status(status).json({
      success: false,
      error: { code, message, ...(details !== undefined && { details }) },
      timestamp: new Date().toISOString(),
    });
  }
}
