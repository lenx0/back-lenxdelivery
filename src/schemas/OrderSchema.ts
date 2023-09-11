import mongoose from "../database";

interface IOrder extends Document {
  address: string;
  latitude?: string;
  longitude: string;
  moment: Date;
  status: "pending" | "delivered";
  products: Array<{
    name: string;
    price: number;
    description: string;
    imageUri: string;
  }>;
  totalPrice: number;
}

const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },

  latitude: {
    type: String,
  },

  longitude: {
    type: String,
    required: true,
  },

  moment: {
    type: Date,
    required: true,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["pending", "delivered"],
    default: "pending",
  },

  products: [
    {
      name: String,
      price: Number,
      description: String,
      imageUri: String,
    },
  ],

  totalPrice: {
    type: Number,
  },

});

const OrderSchema = mongoose.model<IOrder>("orders", orderSchema);

export default OrderSchema;
