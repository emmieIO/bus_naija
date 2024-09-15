import mongoose from 'mongoose';


const busSchema = new mongoose.Schema({
    busNumber: {
        type: String,
        required: true,
        unique: true
    },
    busType: {
        type: String,
        required: true
    },
    busCapacity: {
        type: Number,
        required: true
    },
    busRoute: {
        type: String,
        required: true
    },
    busDriver: {
        type: String,
        required: true
    },
    busConductor: {
        type: String,
        required: true
    },
    busStatus: {
        type: String,
        required: true
    },
    busLocation: {
        type: String,
        required: true
    },
    busImage: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Bus = mongoose.model('Bus', busSchema);
export default Bus;