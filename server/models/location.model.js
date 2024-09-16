import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    address: String,
    coordinates: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    type: { type: String, enum: ['Bus Station', 'Bus Stop', 'Terminal'], required: true },
    amenities: [String],
    operatingHours: String,
    contactNumber: String
});

const Location = mongoose.model('Location', locationSchema);
export default Location;
