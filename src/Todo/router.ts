import { Router } from 'express';
import TodosController from './controller';

const todosRouter: Router = Router();

todosRouter.get('/todos', TodosController.get);
todosRouter.post('/todos', TodosController.create);
todosRouter.put('/todos/:id', TodosController.update);
todosRouter.delete('/todos/:id', TodosController.delete);

export default todosRouter;
