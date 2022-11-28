import mongoose, {Schema} from "mongoose";

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["admin", "staff"],
        default: "admin",
        required: true
    },
    firstname: String,
    middlename: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    passwordHash: {
        type: String,
        required:false
    },
    phone: String,
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    profilePic:{
        type: Schema.Types.ObjectId,
        default: ""
    }
}, { timestamps:true });

export const UserModel = mongoose.model('User_IT4492', UserSchema);