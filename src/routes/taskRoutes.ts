import { Router } from "express";
import { TaskService } from "../Service/task";
import { authMiddleware } from "../middlewere/authMiddlewere";

const router = Router();

router.use(authMiddleware);

router.post("/create", async (req, res) => {
  try {
    const task = await TaskService.create({ ...req.body, userId: req.userId! });
    res.status(201).json(task);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/list", async (req, res) => {
  try {
    const tasks = await TaskService.list(req.userId!);
    res.json(tasks);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await TaskService.update(Number(id), req.body);
    res.json(updated);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.delete(Number(id));
    res.status(204).send();
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/deleteCompleted", async (req, res) => {
  try {
    await TaskService.deleteCompleted(req.userId!);
    res.status(204).send();
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { title } = req.query;
    const results = await TaskService.searchByTitle(req.userId!, String(title));
    res.json(results);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

export default router;