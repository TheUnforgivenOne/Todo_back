import { Schema, model } from 'mongoose';

const Todo = new Schema({
  title: { type: String, required: true },
  done: { type: Boolean, required: true },
  date: { type: Date },
});

export default model('Todo', Todo);
