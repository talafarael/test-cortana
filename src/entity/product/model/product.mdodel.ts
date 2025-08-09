import { Schema, model, models, Document, Types } from "mongoose";

interface IProduct extends Document {
  _id: Types.ObjectId;
  name: {
    ua: string;
    eng: string;
  };
  description: {
    ua: string;
    eng: string;
  };
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    _id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    name: {
      ua: { type: String, required: true },
      eng: { type: String, required: true },
    },
    description: {
      ua: { type: String, required: true },
      eng: { type: String, required: true },
    },
    price: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model<IProduct>("Product", ProductSchema);
