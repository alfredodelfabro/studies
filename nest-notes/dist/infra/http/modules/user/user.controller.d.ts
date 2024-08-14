import { CreateUserUseCase } from 'src/modules/user/createUserUseCase/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
export declare class UserController {
    private readonly createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    createPost(body: CreateUserBody): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
