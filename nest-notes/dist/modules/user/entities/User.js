"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    constructor(props, id) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: new Date(),
        };
        this._id = id || (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get email() {
        return this.props.email;
    }
    set email(email) {
        this.props.email = email;
    }
    get password() {
        return this.props.password;
    }
    set password(password) {
        this.props.password = password;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map