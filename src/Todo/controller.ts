import TodosService from './service';

class TodosController {
  async get(req, res, next) {
    try {
      const todos = await TodosService.getTodos(req.query);
      res.json(todos);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newTodo = await TodosService.createTodo(req.body);
      res.json(newTodo);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedTodo = await TodosService.updateTodo(
        req.params.id,
        req.body
      );
      res.json(updatedTodo);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const deletedTodo = await TodosService.deleteTodo(req.params.id);
      res.json(deletedTodo);
    } catch (err) {
      next(err);
    }
  }
}

export default new TodosController();
