import AppointmentModel from "../models/appointment.model.js";

class AppointmentService{
    // Create a new appointment
    async createAppointment(data){
        const appointment = await AppointmentModel.create(data);
        return appointment
    }

    // get appointment by query
    async getAppointmentByQuery(query){
        const appointment = await AppointmentModel.findone(query)
        return appointment
    }

    // get appointment by id
    async getAppointmentById(appointmentId){
        const appointment = await AppointmentModel.findById(appointmentId);
        return appointment
    }


    // get all appointment
    async getAllAppointments(){
        const appointments = await AppointmentModel.find().populate();
        return appointments;
    }

    // delete appointment by id
    async deleteAppointment(appointmentId){
        const deletedAppointment = await AppointmentModel.findByIdAndDelete(appointmentId)
        return deletedAppointment;
    }

    // update an appointment
    async updateAppointment(appointmentId,data){
        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(appointmentId, data, { new: true })
        return updatedAppointment;
    }

    // get appointments with doctor's id
    async getAppointmentsByDoctorId(doctorId){
        const appointments = await AppointmentModel.find({ doctor: doctorId });
        return appointments;
    }

    // get appointments with patient's id
    async getAppointmentByPatientId(patientId){
        const appointments = await AppointmentModel.find({ patient: patientId });
        return appointments;
    }
}

export default new AppointmentService();