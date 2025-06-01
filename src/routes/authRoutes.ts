import { Router } from "express";
import { AuthService } from "../Service/auth";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await AuthService.register(name, email, password);
    res.status(201).json(user);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

export default router;