import mongoose from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const UserModel = mongoose.connection.useDb('CTM-00').model<IUser>('User', UserSchema, 'users');

// User Actions
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());