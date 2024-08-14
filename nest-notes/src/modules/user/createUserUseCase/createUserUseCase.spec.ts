import { compare } from 'bcrypt';
import { UserRepositoryInMemory } from '../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './createUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);
    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'User Name',
      password: '123456',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('should be able to create a new user with password encrypted', async () => {
    const plainTextPassword = '123456';

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'User Name',
      password: plainTextPassword,
    });

    const userHasEncryptedPassword = await compare(
      plainTextPassword,
      user.password,
    );

    expect(userHasEncryptedPassword).toBeTruthy();
  });
});
