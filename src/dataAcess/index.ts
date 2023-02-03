import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

const connectToMongo = async () => {
  const connectionString: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.set('strictQuery', false);

  return await mongoose.connect(connectionString);
};

export default connectToMongo;
