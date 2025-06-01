import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/api/jwt";

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const auth = req.headers.authorization;
  if (!auth) {
    res.status(401).json({ message: "Token não enviado" });
    return;
  }

  const token = auth.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, jwtConfig.secret) as { userId: number };
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
  }
}