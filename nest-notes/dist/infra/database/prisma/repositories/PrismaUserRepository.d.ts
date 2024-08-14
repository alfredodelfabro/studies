import { User } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
export declare class PrismaUserRepository implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: User): Promise<void>;
}
