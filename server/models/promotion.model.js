import mongoose from "mongoose";

// Promotion Schema
const promotionSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    description: String,
    discountPercentage: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    usageLimit: Number,
    currentUsage: { type: Number, default: 0 }
  });

const Promotion = mongoose.model("Promotion", promotionSchema);
export default Promotion;