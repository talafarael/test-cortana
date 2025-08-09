'use server'
import mongoose, { Schema, model, Document, Model, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  username: string;
}
const UserSchema: Schema<IUser> = new Schema({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
}, { timestamps: true });

export const User: Model<IUser> =
  mongoose.models.User || model<IUser>('User', UserSchema);
