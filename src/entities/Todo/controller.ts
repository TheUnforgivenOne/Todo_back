import { Request, Response } from 'express';
import TodosService from './service';
import catchError from '../../decorators/catchError';

class TodosController {
  @catchError
  async create(req: Request, res: Response) {
    const todo = req.body;

    const newTodo = await TodosService.createTodo(todo);

    res.json(newTodo);
  }

  @catchError
  async read(req: Request, res: Response) {
    const id = req.params?.id;
    const query = req.query;

    const todos = await TodosService.getTodos(id, query);

    res.json(todos);
  }

  @catchError
  async update(req: Request, res: Response) {
    const id = req.params?.id;
    const todo = req.body;

    const updatedTodo = await TodosService.updateTodo(id, todo);

    res.json(updatedTodo);
  }

  @catchError
  async delete(req: Request, res: Response) {
    const id = req.params?.id;

    const deletedTodo = await TodosService.deleteTodo(id);

    res.json(deletedTodo);
  }
}

export default new TodosController();
