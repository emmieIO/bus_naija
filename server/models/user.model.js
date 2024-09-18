import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide a first name'],
    },

    lastname: {
        type: String,
        required: [true, 'Please provide a last name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,

    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    address: {
        type: String,
        required: [true, 'Please provide an address'],
    },
    roles: {
        type: String,
        enum: ['user', 'admin', 'bus operator'],
        default: 'user'
    },
    resetToken: {
        type: String
    },
    resetTokenExpiresAt: {
        type: Date
    },
    verificationCode: {
        type: String
    },
    verificationCodeExpiresAt: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    dateRegistered: { type: Date, default: Date.now }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)
export default User;