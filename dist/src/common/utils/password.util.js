"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_REQUIREMENTS_MESSAGE = void 0;
exports.isPasswordStrong = isPasswordStrong;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
function isPasswordStrong(password) {
    return PASSWORD_REGEX.test(password);
}
exports.PASSWORD_REQUIREMENTS_MESSAGE = 'Password must be at least 8 characters and contain at least one letter and one number';
//# sourceMappingURL=password.util.js.map