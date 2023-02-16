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

    const token = `${user.username}:${hashedPassword}`;
    return { logged: true, token };
  }

  async logoutUser(token: string) {
    const username = token.split(':')[0];

    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new Error('No user with such name');
    }

    return { logged: false };
  }
}

export default new UserService();
