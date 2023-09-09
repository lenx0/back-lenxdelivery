import { Schema } from "mongoose";
import mongoose from "../database";

interface IDish extends Document {
  name: string;
  price: number;
  description: string;
  imageUri: string;
}

const dishSchema: Schema<IDish> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUri: {
    type: String,
    required: true,
  },
});

const DishSchema = mongoose.model<IDish>("dishes", dishSchema);

export default DishSchema;
