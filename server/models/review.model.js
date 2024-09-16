import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    rating: { type: Number, required: true },
    comment: String,
    date: { type: Date, default: Date.now }
})

const Review = mongoose.model("Review", reviewSchema)
export default Review