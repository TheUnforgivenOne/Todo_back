import { Schema, model } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
