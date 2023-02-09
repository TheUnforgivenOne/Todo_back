import { Request, Response } from 'express';
import catchError from '../../decorators/catchError';
import { IUser } from './model';
import UserService from './service';

class UserController {
  @catchError
  async register(req: Request<IUser>, res: Response) {
    const user = req.body;

    const newUser = await UserService.registerUser(user);

    res.status(200).json({ newUser });
  }

  @catchError
  async login(req: Request<IUser>, res: Response) {
    const user = req.body;

    const data = await UserService.loginUser(user);

    res.status(200).json(data);
  }

  @catchError
  async logout(req: Request<{ username: string }>, res: Response) {
    const username = req.body.username;

    const data = await UserService.logoutUser({ username });

    res.status(200).json(data);
  }
}

export default new UserController();
