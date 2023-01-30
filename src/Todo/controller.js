import TodosService from './service.js';

class TodosController {
  async getTodos(req, res) {
    try {
      const todos = await TodosService.getTodos(req.query);
      res.json(todos);
    } catch (e) {
      res.status(500);
    }
  }

  async createTodo(req, res) {
    try {
      const newTodo = await TodosService.createTodo(req.body);
      res.json(newTodo);
    } catch (e) {
      res.status(500);
    }
  }

  async updateTodo(req, res) {
    try {
      const updatedTodo = await TodosService.updateTodo(
        req.params.id,
        req.body
      );
      res.json(updatedTodo);
    } catch (e) {
      res.status(500);
    }
  }

  async deleteTodo(req, res) {
    try {
      const deletedTodo = await TodosService.deleteTodo(req.params.id);
      res.json(deletedTodo);
    } catch (e) {
      res.status(500);
    }
  }
}

export default new TodosController();
