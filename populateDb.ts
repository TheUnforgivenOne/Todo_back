import mongoose from 'mongoose';

import connectToMongo from './src/dataAccess';

import initialTodos from './src/dataAccess/__mocks__/initialTodos.json';
import initialDictionaries from './src/dataAccess/__mocks__/initialDictionaries.json';

const populateDb = async () => {
  await connectToMongo();

  const Dictionaries = mongoose.model('Dictionary');
  const Todo = mongoose.model('Todo');

  // Clear old data if exists
  await Dictionaries.deleteMany();
  await Todo.deleteMany();

  // Populate with initial rows
  await Dictionaries.insertMany(initialDictionaries);
  await Todo.insertMany(initialTodos);
};

populateDb();

export default {};
