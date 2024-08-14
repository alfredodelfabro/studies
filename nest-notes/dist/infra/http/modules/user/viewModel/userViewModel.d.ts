import { User } from 'src/modules/user/entities/User';
export declare class UserViewModel {
    static toHttp({ id, email, name, createdAt, updatedAt }: User): {
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
