import TodosModel from './model';

class TodosService {
  async getTodos(query) {
    const data = await TodosModel.find(query);
    return data;
  }

  async createTodo(todo) {
    const data = await TodosModel.create(todo);
    return data;
  }

  async updateTodo(id, todo) {
    if (!id) {
      throw new Error('No id provided');
    }

    const data = await TodosModel.findByIdAndUpdate(id, todo, { new: true });
    return data;
  }

  async deleteTodo(id) {
    if (!id) {
      throw new Error('No id provided');
    }

    const data = await TodosModel.findByIdAndDelete(id);
    return data;
  }
}

export default new TodosService();
