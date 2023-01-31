import TodosModel, { ITodo } from './model';

class TodosService {
  async getTodos(id: string, query: {}) {
    if (id) {
      return await TodosModel.findById(id);
    }

    return await TodosModel.find(query);
  }

  async createTodo(todo: ITodo) {
    return await TodosModel.create(todo);
  }

  async updateTodo(id: string, todo: ITodo) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await TodosModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async deleteTodo(id: string) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await TodosModel.findByIdAndDelete(id);
  }
}

export default new TodosService();
