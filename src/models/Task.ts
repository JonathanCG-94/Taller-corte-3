import mongoose, { Schema, Document } from 'mongoose';

interface Task extends Document {
  title: string;
  description?: string;
  assignedTo?: string; // Aquí se puede usar el ID del usuario
  status: 'todo' | 'inProgress' | 'done';
  createdAt: Date;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['todo', 'inProgress', 'done'],
    default: 'todo',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Task>('Task', TaskSchema);