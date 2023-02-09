import UserModel, { IUser } from './model';

const hash = (value: string) => Buffer.from(value).toString('base64');

class UserService {
  async registerUser(creds: IUser) {
    const user = await UserModel.findOne({ username: creds.username });

    if (user) {
      throw new Error('Username already exists');
    }

    const hashedPassword = hash(creds.password);
    const data = await UserModel.create({
      ...creds,
      password: hashedPassword,
      isLogged: false,
    });

    return data;
  }

  async loginUser(creds: IUser) {
    const user = await UserModel.findOne({ username: creds.username });

    if (!user) {
      throw new Error('No user with such name');
    }

    const hashedPassword = hash(creds.password);
    if (hashedPassword !== user.password) {
      throw new Error('Wrong password');
    }

    user.isLogged = true;
    await user.save();

    return { username: user.username, isLogged: user.isLogged };
  }

  async logoutUser({ username }: { username: string }) {
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new Error('No user with such name');
    }

    user.isLogged = false;
    await user.save();

    return { isLogged: user.isLogged };
  }
}

export default new UserService();
