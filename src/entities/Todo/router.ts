import { Router } from 'express';
import TodosController from './controller';

const todosRouter: Router = Router();

todosRouter.post('/', TodosController.create);
todosRouter.get(['/', '/:id'], TodosController.read);
todosRouter.put('/:id', TodosController.update);
todosRouter.delete('/:id', TodosController.delete);

export default todosRouter;
