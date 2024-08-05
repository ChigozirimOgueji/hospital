import {Schema, model} from "mongoose";

const hospitalSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // adminId:{
    //     type: SchemaType.Types.ObjectId,
    //     required: true,
    //     unique: false,
    //     trim: true,
    //     ref: "admin"
    // },
    address:{
        type:String,
        required: true,
        unique: false,
        trim: true
    },
    contactNumber:{
        type: Number,
        required: true, 
    },
    email:{
        type:String,
        unique: true,
        trim: true
    },

    doctors: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Doctor' 
    }],

    specialties: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Specialty' 
    }],
   
    cac:{
        type: String,
        required: false,
        unique: false
    },

    operatingPermit:{
        type: String,
        required: false,
        unique: false
    },

    operatingLicense:{
        type: String,
        required: false,
        unique: false
    },
    logo:{
        type: String,
        required: false,
        unique: true
    }
})

const HospitalModel = new model("hospital", hospitalSchema);
export default HospitalModel;