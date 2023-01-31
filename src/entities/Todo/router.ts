import { Router } from 'express';
import TodosController from './controller';

const todosRouter: Router = Router();

todosRouter.post('/todos', TodosController.create);
todosRouter.get(['/todos', '/todos/:id'], TodosController.read);
todosRouter.put('/todos/:id', TodosController.update);
todosRouter.delete('/todos/:id', TodosController.delete);

export default todosRouter;
