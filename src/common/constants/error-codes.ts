/**
 * Mã lỗi nghiệp vụ (business error codes).
 *
 * Frontend/mobile nên switch theo `error.code` thay vì parse message tiếng Anh.
 * Mã trùng với business rules trong tài liệu requirement (AUTH_BR01, LOG_BR02, ...).
 */
export const ErrorCodes = {
  // Lỗi kỹ thuật chung
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  INTERNAL_ERROR: 'INTERNAL_ERROR',

  // Nhóm Auth (đăng ký / đăng nhập)
  AUTH_BR01: 'AUTH_BR01', // Email đã tồn tại
  AUTH_BR02: 'AUTH_BR02', // Thiếu thông tin bắt buộc
  AUTH_BR03: 'AUTH_BR03', // Mật khẩu không đủ mạnh
  AUTH_BR04: 'AUTH_BR04', // Tài khoản bị khóa
  AUTH_BR05: 'AUTH_BR05', // User không có quyền admin
  AUTH_BR06: 'AUTH_BR06', // Reserved

  // Nhóm Habit
  HABIT_BR02: 'HABIT_BR02', // Không sở hữu / không tìm thấy habit
  HABIT_BR03: 'HABIT_BR03', // Thiếu tên habit
  HABIT_BR06: 'HABIT_BR06', // Trạng thái không hợp lệ

  // Nhóm Schedule (lịch lặp)
  SCH_BR05: 'SCH_BR05', // Weekly chưa chọn ngày trong tuần
  SCH_BR06: 'SCH_BR06', // Monthly chưa chọn ngày trong tháng

  // Nhóm HabitLog (check-in)
  LOG_BR02: 'LOG_BR02', // Không thuộc lịch hôm nay / habit không active
  LOG_BR03: 'LOG_BR03', // Không có quyền log habit người khác
  LOG_BR13: 'LOG_BR13', // Trùng log cùng ngày (xử lý bằng upsert)

  // Nhóm Category
  CAT_BR05: 'CAT_BR05', // Không sửa/xóa danh mục hệ thống
  CAT_BR08: 'CAT_BR08', // Tên danh mục trùng trong phạm vi user

  // Nhóm Admin
  ADM_BR01: 'ADM_BR01', // Không phải role admin
  ADM_BR06: 'ADM_BR06', // Admin tự khóa tài khoản mình
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
