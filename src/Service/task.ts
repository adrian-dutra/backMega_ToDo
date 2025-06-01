import { TaskDAO } from "../dao/taskDao";
import { Task } from "../domain/task";

export const TaskService = {
  create(task: Task) {
    return TaskDAO.create(task);
  },

  list(userId: number) {
    return TaskDAO.findByUser(userId);
  },

  update(id: number, data: Partial<Task>) {
    return TaskDAO.update(id, data);
  },

  delete(id: number) {
    return TaskDAO.delete(id);
  },

  deleteCompleted(userId: number) {
    return TaskDAO.deleteCompleted(userId);
  },

  searchByTitle(userId: number, title: string) {
    return TaskDAO.findByTitle(userId, title);
  }
};