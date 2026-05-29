/**
 * Kiểm tra độ mạnh mật khẩu — rule AUTH_BR03.
 * Tối thiểu 8 ký tự, có ít nhất 1 chữ cái và 1 chữ số.
 */
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export function isPasswordStrong(password: string): boolean {
  return PASSWORD_REGEX.test(password);
}

export const PASSWORD_REQUIREMENTS_MESSAGE =
  'Password must be at least 8 characters and contain at least one letter and one number';
