import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({
    id,
    email,
    name,
    password,
    createdAt,
    updatedAt,
  }: User): UserRaw {
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
