import mongoose, { Schema } from 'mongoose';

import connectToMongo from '../connectDB';

import initialUsers from './__mocks__/initialUsers.json';
import initialTodos from './__mocks__/initialTodos.json';
import initialDictionaries from './__mocks__/initialDictionaries.json';

(async () => {
  const connection = await connectToMongo();
  console.log('Connected to mongo');

  const mockSchema = new Schema({}, { strict: false });

  const UserModelMock = mongoose.model('User', mockSchema);
  const DictionaryModelMock = mongoose.model('Dictionary', mockSchema);
  const TodoModelMock = mongoose.model('Todo', mockSchema);
  console.log('Created collections');

  // Clear old data if exists
  await UserModelMock.deleteMany();
  await DictionaryModelMock.deleteMany();
  await TodoModelMock.deleteMany();
  console.log('Collections cleared');

  // Populate with initial rows
  await UserModelMock.insertMany(initialUsers);
  await DictionaryModelMock.insertMany(initialDictionaries);
  await TodoModelMock.insertMany(initialTodos);
  console.log('Collections filled with defaults');

  await connection.disconnect();
  console.log('Disconnected from DB');
})();
