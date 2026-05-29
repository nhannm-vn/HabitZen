/**
 * Map biến môi trường (.env) sang object cấu hình typed.
 * Được load bởi @nestjs/config trong AppConfigModule.
 *
 * Cách dùng trong service: this.config.get<string>('jwt.secret')
 */
export default () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parseInt(process.env.PORT ?? '3000', 10),
  apiPrefix: process.env.API_PREFIX ?? 'api/v1',
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'dev-secret-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  },
  // Số vòng bcrypt — cao hơn = an toàn hơn nhưng chậm hơn khi hash password
  bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS ?? '10', 10),
  // Tùy chọn: tự tạo tài khoản admin lần đầu khi server khởi động
  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    fullName: process.env.ADMIN_FULL_NAME ?? 'System Admin',
  },
});
