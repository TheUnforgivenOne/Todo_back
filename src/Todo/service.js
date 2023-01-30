import TodosModel from './model.js';

class TodosService {
  getTodos(query) {
    return TodosModel.find(query);
  }

  createTodo(todo) {
    return TodosModel.create(todo);
  }

  updateTodo(id, todo) {
    if (!id) {
      return { error: 'No id provided' };
    }

    return TodosModel.findByIdAndUpdate(id, todo, { new: true });
  }

  deleteTodo(id) {
    if (!id) {
      return { error: 'No id provided' };
    }

    return TodosModel.findByIdAndDelete(id);
  }
}

export default new TodosService();
