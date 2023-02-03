import TodoModel, { ITodo } from './model';

class TodosService {
  async getTodos(id: string, query: {}) {
    if (id) {
      return await TodoModel.findById(id);
    }

    return await TodoModel.find(query);
  }

  async createTodo(todo: ITodo) {
    return await TodoModel.create(todo);
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
