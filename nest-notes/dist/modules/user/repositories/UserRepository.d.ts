import { User } from '@prisma/client';
export declare abstract class UserRepository {
    abstract create(user: User): Promise<void>;
}
