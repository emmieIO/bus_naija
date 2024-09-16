import mongoose from "mongoose";


// Route Schema
const routeSchema = new mongoose.Schema({
    origin: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    distance: { type: Number, required: true },
    estimatedDuration: { type: Number, required: true }, // in minutes
    basePrice: { type: Number, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    frequencyPerDay: Number,
    peakHours: [String]
});
const Route = mongoose.model("Route", routeSchema);
export default Route;
