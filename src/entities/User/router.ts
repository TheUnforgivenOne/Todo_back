import { Router } from 'express';
import UserController from './controller';

const userRouter = Router();

userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.post('/logout', UserController.logout);

export default userRouter;
