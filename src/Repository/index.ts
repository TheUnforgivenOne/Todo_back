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

const DictionarySchema = new Schema<IDictionary>({
  priority: { type: Schema.Types.Mixed },
});
const TodoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  priority: { type: Number },
  description: { type: String },
  dateCreated: { type: Date },
});

class Repository {
  private connectionString: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority`;

  DictionaryModel = model<IDictionary>('Dictionary', DictionarySchema);
  TodoModel = model<ITodo>('Todo', TodoSchema);

  async connectToMongo() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(this.connectionString);
  }
}

export default new Repository();
