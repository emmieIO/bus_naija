import mongoose from "mongoose";


// Booking Schema
const bookingSchema = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
    seatNumber: { type: String, required: true },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Confirmed', 'Cancelled', 'Completed'], default: 'Confirmed' },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Refunded'], default: 'Pending' },
    price: { type: Number, required: true }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;