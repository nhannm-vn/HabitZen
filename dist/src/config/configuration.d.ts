declare const _default: () => {
    nodeEnv: string;
    port: number;
    apiPrefix: string;
    database: {
        url: string | undefined;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    bcryptRounds: number;
    admin: {
        email: string | undefined;
        password: string | undefined;
        fullName: string;
    };
};
export default _default;
