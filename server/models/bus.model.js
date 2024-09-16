import mongoose from 'mongoose';


const busSchema = new mongoose.Schema({
    registrationNumber: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    capacity: { type: Number, required: true },
    manufactureYear: { type: Number, required: true },
    lastMaintenanceDate: Date,
    nextMaintenanceDate: Date,
    status: { type: String, enum: ['Active', 'Under Maintenance', 'Out of Service'], default: 'Active' },
    operator: { type: mongoose.Schema.Types.ObjectId, ref: 'BusOperator' },
    features: [String],
    images:[String]
  });
const Bus = mongoose.model('Bus', busSchema);
export default Bus;