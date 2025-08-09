import mongoose, { Schema, model, Model, Types, Document } from 'mongoose';



const UserSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
}, { timestamps: true });

export const User = mongoose.models.User || model('User', UserSchema);
