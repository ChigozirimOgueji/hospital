
import { Schema, model } from "mongoose"

const specialtySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
        enum: [  
          'Cardiology', 
          'Pediatrics', 
          'General Surgery',
          'Dermatology',
          'Neurology', 
          'Obstetrics & Gynecology',
          'Orthopedics',
          'Psychiatry',
          'Radiology',
          'Oncology',
          'Gastroenterology',
          'Endocrinology',
          'Nephrology',
          'Pulmonology',
          'Urology',
          'Ophthalmology',
          'Anesthesiology',
          'Emergency Medicine',
          'Family Medicine',
          'Internal Medicine',
          'Pathology',
          'Physical Therapy',
          'Podiatry',
          'Rheumatology',
          'Sports Medicine',
        ]
    }
})


const SpecialtyModel = new model("specialty", specialtySchema)
export default SpecialtyModel;