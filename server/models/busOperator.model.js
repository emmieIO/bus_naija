const mongoose = require('mongoose');

// Bus Operator Schema
const busOperatorSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    contactPerson: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true
    },
    fleetSize: {
        type: Number,
        default: 0
    },
    operationalRoutes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route'
    }],
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Active', 'Suspended', 'Inactive'],
        default: 'Active'
    }
});

// Virtual for getting all buses owned by this operator
busOperatorSchema.virtual('buses', {
    ref: 'Bus',
    localField: '_id',
    foreignField: 'operator'
});

// Method to add a bus to the operator's fleet
busOperatorSchema.methods.addBus = async function (busData) {
    const Bus = mongoose.model('Bus');
    busData.operator = this._id;
    const newBus = new Bus(busData);
    await newBus.save();
    this.fleetSize += 1;
    await this.save();
    return newBus;
};

// Method to remove a bus from the operator's fleet
busOperatorSchema.methods.removeBus = async function (busId) {
    const Bus = mongoose.model('Bus');
    await Bus.findByIdAndDelete(busId);
    this.fleetSize -= 1;
    await this.save();
};

const BusOperator = mongoose.model('BusOperator', busOperatorSchema);

module.exports = BusOperator;