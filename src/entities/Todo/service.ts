import Repository, { ITodo } from '../../Repository';

class TodosService {
  async getTodos(id: string, query: {}) {
    if (id) {
      return await Repository.TodoModel.findById(id);
    }

    return await Repository.TodoModel.find(query);
  }

  async createTodo(todo: ITodo) {
    return await Repository.TodoModel.create(todo);
  }

  async updateTodo(id: string, todo: ITodo) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await Repository.TodoModel.findByIdAndUpdate(id, todo, {
      new: true,
    });
  }

  async deleteTodo(id: string) {
    if (!id) {
      throw new Error('No id provided');
    }

    return await Repository.TodoModel.findByIdAndDelete(id);
  }
}

export default new TodosService();
