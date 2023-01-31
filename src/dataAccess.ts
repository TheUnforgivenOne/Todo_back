import mongoose from 'mongoose';

const connectToMongo = async () => {
  const dbAddres = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.set('strictQuery', false);

  await mongoose.connect(dbAddres);
};

export default connectToMongo;
