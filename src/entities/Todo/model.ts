import { Schema, model } from 'mongoose';

export interface ITodo {
  title: string;
  completed: boolean;
  priority?: number;
  description?: string;
  dateCreated?: Date;
}

const Todo = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: Number },
  description: { type: String },
  dateCreated: { type: Date },
});

export default model<ITodo>('Todo', Todo);
