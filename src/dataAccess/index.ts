import * as dotenv from 'dotenv';
import mongoose, { Schema, model } from 'mongoose';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

interface IDictionary {
  priority: { [key: string]: string };
}
export interface ITodo {
  title: string;
  completed: boolean;
  priority?: number;
  description?: string;
  dateCreated?: Date;
}

const DictionaryModel = model<IDictionary>(
  'Dictionary',
  new Schema<IDictionary>({
    priority: { type: Schema.Types.Mixed },
  })
);
const TodoModel = model<ITodo>(
  'Todo',
  new Schema<ITodo>({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    priority: { type: Number },
    description: { type: String },
    dateCreated: { type: Date },
  })
);

export { DictionaryModel, TodoModel };

const connectToMongo = async () => {
  const dbAddres = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.set('strictQuery', false);

  return await mongoose.connect(dbAddres);
};

export default connectToMongo;
