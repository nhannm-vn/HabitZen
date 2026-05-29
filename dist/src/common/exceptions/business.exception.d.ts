import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../constants/error-codes';
export declare class BusinessException extends HttpException {
    readonly code: ErrorCode;
    readonly details?: unknown | undefined;
    constructor(code: ErrorCode, message: string, status?: HttpStatus, details?: unknown | undefined);
}
