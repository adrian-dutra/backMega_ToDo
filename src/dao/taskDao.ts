import { prisma } from "../config/db/prisma";
import { Task } from "../domain/task";

export const TaskDAO = {
  create(task: Task) {
    return prisma.task.create({ data: task });
  },

  findByUser(userId: number) {
    return prisma.task.findMany({
      where: { userId },
      orderBy: [
        { done: "asc" },
        { dueDate: "asc" },
        { priority: "desc" },
      ],
    });
  },

  update(id: number, data: Partial<Task>) {
    return prisma.task.update({ where: { id }, data });
  },

  delete(id: number) {
    return prisma.task.delete({ where: { id } });
  },

  deleteCompleted(userId: number) {
    return prisma.task.deleteMany({ where: { userId, done: true } });
  },

  findByTitle(userId: number, title: string) {
    return prisma.task.findMany({
      where: {
        userId,
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
    });
  }
};