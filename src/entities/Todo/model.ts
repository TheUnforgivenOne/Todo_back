import { Schema, model } from 'mongoose';

export interface ITodo {
  _id: Schema.Types.ObjectId;
  title: string;
  completed: boolean;
  priority: number;
  description?: string;
  dateCreated?: Date;
}

const TodoSchema = new Schema<ITodo>({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: Number, required: true },
  description: { type: String },
  dateCreated: { type: Date },
});

const TodoModel = model<ITodo>('Todo', TodoSchema);

export default TodoModel;
