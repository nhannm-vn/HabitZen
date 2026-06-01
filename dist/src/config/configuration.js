"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
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
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS ?? '10', 10),
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        fullName: process.env.ADMIN_FULL_NAME ?? 'System Admin',
    },
});
//# sourceMappingURL=configuration.js.map