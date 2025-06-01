export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: number;
  done?: boolean;
  userId: number;
}