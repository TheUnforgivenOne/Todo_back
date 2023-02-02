import mongoose from 'mongoose';

import Repository from './src/Repository';

import initialTodos from './src/Repository/__mocks__/initialTodos.json';
import initialDictionaries from './src/Repository/__mocks__/initialDictionaries.json';

const populateDb = async () => {
  await Repository.connectToMongo();

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
