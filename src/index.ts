import express from "express";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import { json } from "express";

const app = express();

app.use(json());

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando 🚀 na porta ${PORT}`);
});