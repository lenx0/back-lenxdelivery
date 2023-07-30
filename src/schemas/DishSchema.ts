import mongoose from "../database";

const dishSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },

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

const DishSchema = mongoose.model("dishes", dishSchema);

export default DishSchema;
