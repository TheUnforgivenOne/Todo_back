import express from 'express';
import TodosController from './controller.js';

const todosRouter = express.Router();

todosRouter.get('/todos', TodosController.getTodos);
todosRouter.post('/todos', TodosController.createTodo);
todosRouter.put('/todos/:id', TodosController.updateTodo);
todosRouter.delete('/todos/:id', TodosController.deleteTodo);

export default todosRouter;
