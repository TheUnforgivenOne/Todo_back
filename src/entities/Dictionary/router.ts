import { Router } from 'express';
import DictionaryController from './controller';

const dictionaryRouter: Router = Router();

dictionaryRouter.get(['/', '/:dictionaryKey'], DictionaryController.read);

export default dictionaryRouter;
