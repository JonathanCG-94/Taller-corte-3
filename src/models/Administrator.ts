import mongoose, { Schema, Document } from 'mongoose';

export interface Administrator extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}

const AdministratorSchema: Schema = new Schema({
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
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Administrator>('Administrator', AdministratorSchema);