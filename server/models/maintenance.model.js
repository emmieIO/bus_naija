import mongoose from 'mongoose';

const maintenanceSchema = new mongoose.Schema({
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    maintenanceType: { type: String, required: true },
    maintenanceDate: { type: Date, required: true },
    description: String,
    cost: { type: Number, required: true },
    technicianName: String
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
export default Maintenance;