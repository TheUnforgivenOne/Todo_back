import { Schema, model } from 'mongoose';

export interface ITodo {
  title: string;
  completed: boolean;
  date?: Date;
}

const Todo = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: Date },
});

export default model<ITodo>('Todo', Todo);
