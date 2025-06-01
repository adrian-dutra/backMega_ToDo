import { prisma } from "../config/db/prisma";
import { User } from "../domain/user";

export const UserDAO = {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  async create(user: Omit<User, "id">) {
    return prisma.user.create({ data: user });
  }
};