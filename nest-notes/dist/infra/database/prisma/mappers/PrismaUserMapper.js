"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
class PrismaUserMapper {
    static toPrisma({ id, email, name, password, createdAt, updatedAt, }) {
        return {
            id,
            email,
            name,
            password,
            createdAt,
            updatedAt,
        };
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=PrismaUserMapper.js.map