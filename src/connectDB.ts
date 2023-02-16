import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

const connectToMongo = async () => {
  const connectionString: string = process.env.DB_CONNECTION;

  mongoose.set('strictQuery', false);

  return await mongoose.connect(connectionString);
};

export default connectToMongo;
