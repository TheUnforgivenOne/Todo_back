import UserModel from '../User/model';
import TodoModel, { ITodo } from './model';

class TodosService {
  async getTodos(id: string, query: any) {
    if (id) {
      return await TodoModel.findById(id);
    }

    const filter = {};
    query?.completed && Object.assign(filter, { completed: query.completed });

    const [todos, total, totalCompleted] = await Promise.all([
      TodoModel.find(filter).populate({
        path: 'author',
        // match: { username: 'third' },
      }),
      TodoModel.find({}).countDocuments(),
      TodoModel.find({}).countDocuments({ completed: true }),
    ]);

    return {
      todos,
      total,
      totalCompleted,
    };
  }

  async createTodo(currentUser: string | null, todo: ITodo) {
    let userId = null;
    if (currentUser) {
      userId = await UserModel.findOne({ username: currentUser });
    }

    return await TodoModel.create({
      ...todo,
      dateCreated: new Date(),
      author: userId,
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
