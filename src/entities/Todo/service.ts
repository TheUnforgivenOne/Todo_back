import mongoose from 'mongoose';
import TodoModel, { ITodo } from './model';

class TodosService {
  async getTodos(id: string, query: any) {
    if (id) {
      return await TodoModel.findById(id);
    }

    const filter = {};
    query?.completed ?? Object.assign(filter, { completed: query.completed });

    const [todos, total, totalCompleted] = await Promise.all([
      TodoModel.find(filter),
      TodoModel.find({}).countDocuments(),
      TodoModel.find({}).countDocuments({ completed: true }),
    ]);

    return {
      todos,
      total,
      totalCompleted,
    };
  }

  async createTodo(todo: ITodo) {
    return await TodoModel.create({
      ...todo,
      _id: new mongoose.Types.ObjectId(),
      dateCreated: new Date(),
    });
  }

  async updateTodo(id: string, todo: ITodo) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await TodoModel.findByIdAndUpdate(id, todo, {
      new: true,
    });
  }

  async deleteTodo(id: string) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await TodoModel.findByIdAndDelete(id);
  }
}

export default new TodosService();
