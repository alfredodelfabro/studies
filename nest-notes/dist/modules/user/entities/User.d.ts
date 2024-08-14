import { Replace } from 'src/utils/replace';
interface UserSchema {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class User {
    private props;
    private _id;
    constructor(props: Replace<UserSchema, {
        createdAt?: Date;
        updatedAt?: Date;
    }>, id?: string);
    get id(): string;
    get email(): string;
    set email(email: string);
    get password(): string;
    set password(password: string);
    get name(): string;
    set name(name: string);
    get createdAt(): Date;
    get updatedAt(): Date;
}
export {};
