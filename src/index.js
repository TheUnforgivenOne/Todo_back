import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import todosRouter from './Todo/router.js';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();

app.use(express.json());
app.use(todosRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority`
    );

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (e) {
    throw e;
  }
};

start();
