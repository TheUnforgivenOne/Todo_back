import TodosService from './service';

class TodosController {
  async get(req, res) {
    try {
      const todos = await TodosService.getTodos(req.query);
      res.json(todos);
    } catch (e) {
      res.status(500);
    }
  }

  async create(req, res) {
    try {
      const newTodo = await TodosService.createTodo(req.body);
      res.json(newTodo);
    } catch (e) {
      res.status(500);
    }
  }

  async update(req, res) {
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

  async delete(req, res) {
    try {
      const deletedTodo = await TodosService.deleteTodo(req.params.id);
      res.json(deletedTodo);
    } catch (e) {
      res.status(500);
    }
  }
}

export default new TodosController();
