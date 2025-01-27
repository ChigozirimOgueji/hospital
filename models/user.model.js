import { Schema, model} from "mongoose";


const UserSchema = new Schema({
   
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    fullName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    updatedAt:{
        type: Date,
        default: Date.now(),
    },
  
})

const fullName = firstName + " " + lastName;

const UserModel = new model ("User", UserSchema)
export default UserModel;