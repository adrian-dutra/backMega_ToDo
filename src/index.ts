import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const prisma = new PrismaClient();

app.get("/", async (req: any, res: any) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
