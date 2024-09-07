import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phone:String,
    address:String,
    socialLogins: [
        { provider: String, id: String }
    ],
    roles:[{ type: mongoose.Schema.ObjectId, ref: 'Location' }],
    favoriteLocations: [{ type: mongoose.Schema.ObjectId, ref: 'Location' }],
    wallet: {
        balance: Number,
        transactions: [{ type:mongoose.Schema.ObjectId, ref: 'Transaction' }]
    },
    verificationToken:{
        type:String,
        default:null
    },
    resetToken:{
        type:String,
        default:null
    },
    verifiedAt:{
        type:Date,
        default:null
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{ timestamps: true })

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)
export default User;