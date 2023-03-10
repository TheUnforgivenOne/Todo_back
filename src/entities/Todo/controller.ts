import { Request, Response } from 'express';
import { ITodo } from './model';

import TodosService from './service';
import catchError from '../../decorators/catchError';

class TodosController {
  @catchError
  async create(req: Request<ITodo>, res: Response) {
    const { todo } = req.body;
    const token = req.cookies?.token;

    const newTodo = await TodosService.createTodo(todo, token);

    res.status(200).json({ newTodo });
  }

  @catchError
  async read(req: Request, res: Response) {
    const query = req.query;
    const token = req.cookies?.token;

    const todos = await TodosService.getTodos(query, token);

    res.status(200).json(todos);
  }

  @catchError
  async update(req: Request<{ id?: string }, ITodo>, res: Response) {
    const id = req.params?.id;
    const todo = req.body;

    const updatedTodo = await TodosService.updateTodo(id, todo);

    res.status(200).json({ updatedTodo });
  }

  @catchError
  async delete(req: Request<{ id?: string }>, res: Response) {
    const id = req.params?.id;

    const deletedTodo = await TodosService.deleteTodo(id);

    res.status(200).json({ deletedTodo });
  }
}

export default new TodosController();
