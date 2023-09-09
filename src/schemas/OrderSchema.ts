import mongoose from "../database";

const orderSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },

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

const OrderSchema = mongoose.model("orders", orderSchema);

export default OrderSchema;
