import bcrypt from "bcrypt";
import { UserDAO } from "../dao/userDao";
import jwt, { SignOptions } from "jsonwebtoken";
import { jwtConfig } from "../config/api/jwt";

export const AuthService = {
  async register(name: string, email: string, password: string) {
    const existing = await UserDAO.findByEmail(email);
    if (existing) throw new Error("E-mail já cadastrado");

    const hashed = await bcrypt.hash(password, 10);
    const user = await UserDAO.create({ name, email, password: hashed });

    return { id: user.id, name: user.name, email: user.email };
  },

  async login(email: string, password: string) {
  const user = await UserDAO.findByEmail(email);
  if (!user) throw new Error("Usuário não encontrado");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Senha incorreta");

  const payload = { userId: user.id };

  const options: SignOptions = {
    expiresIn: jwtConfig.expiresIn,
  };

  const token = jwt.sign(payload, jwtConfig.secret, options);

  return { token };
}
};