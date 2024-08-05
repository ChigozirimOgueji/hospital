import {Schema, model} from "mongoose"
import { format } from "morgan";

const appointmentSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patient",
        required: true 
        }, 
    doctor: { 
        type: Schema.Types.ObjectId,
        ref: 'doctor', 
        required: true
     },
    date: { 
        type: String,
        format: "Date",
        required: true 
    },
    time: { 
        type: String, 
        format: "Time",
        required: true 
    },
    
    status: { 
      type: String, 
      enum: ['scheduled', 'cancelled', 'completed'], 
      default: 'scheduled' 
    },
    reason:{
        type: String, 
    },
    notes: { 
        type: String 
    },
    availability: { 
        type: Schema.Types.ObjectId, 
        ref: 'Availability' 
    },
    createdAt:{type: Date, default: Date.now()},
    updatedAt:{type: Date, default: Date.now()}
})

appointmentSchema.pre("save", function (next){
    this.updatedAt = Date.now();
    next();
})

const AppointmentModel = new model("appointment", appointmentSchema)

export default AppointmentModel;


