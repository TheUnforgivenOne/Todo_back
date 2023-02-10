import { Schema, model } from 'mongoose';

export interface ITodo {
  title: string;
  completed: boolean;
  priority: number;
  description?: string;
  dateCreated?: Date;
  author?: Schema.Types.ObjectId;
}

const TodoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: Number, required: true },
  description: { type: String },
  dateCreated: { type: Date },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const TodoModel = model<ITodo>('Todo', TodoSchema);

export default TodoModel;
