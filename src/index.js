import express from 'express';
import mongoose from 'mongoose';
import todosRouter from './Todo/router.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(todosRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.nj6djyg.mongodb.net/?retryWrites=true&w=majority'
    );
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (e) {
    throw e;
  }
};

start();
