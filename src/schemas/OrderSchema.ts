import mongoose from "../database";

interface IOrder extends Document {
  address: string;
  latitude?: string;
  longitude: string;
  moment: Date;
  status: "pending" | "delivered";
  total?: string;
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

  total: {
    type: String,
  },
});

const OrderSchema = mongoose.model<IOrder>("orders", orderSchema)

export default OrderSchema;
