import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    gigId: {
        type: String, 
        required: true,
    },
    img: {
        type: String, 
        required: false,
    },
    title: {
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    sellerId: {
        type: Number, 
        required: true,
    },
    buyerId: {
        type: Number, 
        required: true,
    },
    isCompleted: {
        type: Boolean, 
        default: false
    },
    payment_intent: {
        type: Number, 
        required: true,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
