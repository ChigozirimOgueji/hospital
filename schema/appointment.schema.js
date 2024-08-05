import Joi from "joi";

const createAppointmentSchema = Joi.object({
    
    date:Joi.string().required(),
    time:Joi.string().required(),
    status:Joi.string().required(),
    reason:Joi.string().required(),
    notes:Joi.string().required(),
    
})

export { createAppointmentSchema}

