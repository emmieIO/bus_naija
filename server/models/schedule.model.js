import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    currentCapacity: { type: Number, required: true },
    status: { type: String, enum: ['On Time', 'Delayed', 'Cancelled'], default: 'On Time' },
    availableSeats: [String]
  });
const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;