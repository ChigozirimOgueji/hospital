import Joi from "joi"

const createHospitalSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contactNumber: Joi.number().required(),
    email: Joi.string().email().required(),
    cac: Joi.string().required(),
    operatingPermit: Joi.string().required(),
    operatingLicense: Joi.string().required(),
    logo: Joi.string().required()
})

export { createHospitalSchema } 