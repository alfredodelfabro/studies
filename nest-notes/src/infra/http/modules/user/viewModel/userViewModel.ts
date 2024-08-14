import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHttp({ id, email, name, createdAt, updatedAt }: User) {
    return {
      id,
      email,
      name,
      createdAt,
      updatedAt,
    };
  }
}
