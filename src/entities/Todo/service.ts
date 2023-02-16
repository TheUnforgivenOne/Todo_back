import UserModel from '../User/model';
import TodoModel, { ITodo } from './model';

class TodosService {
  async getTodos(query: any, token?: string) {
    const filter = {};
    query.completed !== 'null' &&
      Object.assign(filter, { completed: query.completed });

    if (token && query.onlyMy === 'true') {
      const username = token.split(':')[0];
      const user = await UserModel.findOne({ username });

      Object.assign(filter, { author: user._id });
    }

    const [todos, total, totalCompleted] = await Promise.all([
      TodoModel.find(filter).populate({ path: 'author' }),
      TodoModel.find({}).countDocuments(),
      TodoModel.find({}).countDocuments({ completed: true }),
    ]);

    return {
      todos,
      total,
      totalCompleted,
    };
  }

  async createTodo(todo: ITodo, token: string) {
    let user = null;
    if (token) {
      const username = token.split(':')[0];
      user = await UserModel.findOne({ username });
    }

    return await TodoModel.create({
      ...todo,
      dateCreated: new Date(),
      author: user,
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
