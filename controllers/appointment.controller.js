import AppointmentService from "../services/appointment.service.js";

class AppointmentController {

    async createAppointment(req, res){
        const appointmentData = req.body
        const appointment = await AppointmentService.createAppointment(appointmentData);
        res.status(201).send({
            success: true,
            message: 'Appointment created successfully',
            appointment
        })
    }

    async getAppointmentByQuery(req,res){
        const appointmentQuery = req.body
        const appointmentQueried = await AppointmentService.getAppointmentByQuery(appointmentQuery)
        res.status(200).send({
            success: true,
            appointmentQueried
        })
    }

    async getAppointmentById(req,res){
        const appointmentId = req.params.appointmentId
        const appointment = AppointmentService.getAppointmentById(appointmentId)
        if(!appointment){
            return res.status(404).send({
                message: "Invalid _id",
                success: false
            })
        }
    }

    async getAllAppointments(req,res){
        const appointments = AppointmentService.getAllAppointments()
        res.status(200).send({
            success: true,
            appointments
        })
    }

    async deleteAppointment(req,res){
        const appointmentId = req.params.appointmentId
        const foundappointment = AppointmentService.getAppointmentById(appointmentId)
        if (!foundappointment){
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            })
        }

        const appointment = AppointmentService.deleteAppointment(appointmentId)
        return res.status(200).send({
            success: true,
            appointment
        })
    }

    async updateAppointment(req, res){
        const appointmentId = req.params.appointmentId
        const data = req.body
        const foundappointment = await AppointmentService.getAppointmentById(appointmentId)
        if (!foundappointment) {
            return res.status(404).send({
                message: "Invalid _id",
                success: false
            })
        }
        const appointment = await AppointmentService.updateAppointment(appointmentId, data)
    }

    async getAppointmentsByDoctorId(req, res) {
        const doctorId = req.params.doctorId
        const appointments = await AppointmentService.getAppointmentsByDoctorId(doctorId);
        res.status(200).send({
            success: true,
            appointments
        })
    }

    async getAppointmentByPatientId(req,res){
        const patientId = req.params.patientId
        const appointments = await AppointmentService.getAppointmentByPatientId(patientId);
        res.status(200).send({
            success: true,
            appointments
        })
    }
}

export default new AppointmentController;