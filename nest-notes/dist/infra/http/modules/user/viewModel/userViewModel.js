"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModel = void 0;
class UserViewModel {
    static toHttp({ id, email, name, createdAt, updatedAt }) {
        return {
            id,
            email,
            name,
            createdAt,
            updatedAt,
        };
    }
}
exports.UserViewModel = UserViewModel;
//# sourceMappingURL=userViewModel.js.map