import { Router } from "express";
const router = Router();
import AppointmentController from "../controllers/appointment.controller.js"
import { createAppointmentSchema } from "../schema/appointment.schema.js"
import validate from "../middlewares/validate.middleware.js";


router.post('/', validate(createAppointmentSchema), AppointmentController.createAppointment); 
router.get('/query', AppointmentController.getAppointmentByQuery);
router.get('/:appointmentId', AppointmentController.getAppointmentById);
router.get('/', AppointmentController.getAllAppointments);
router.get('/:appointmentId', AppointmentController.deleteAppointment);
router.patch('/:appointmentId', AppointmentController.updateAppointment);
router.get('/', AppointmentController.getAppointmentsByDoctorId);
router.get('/', AppointmentController.getAppointmentByPatientId);
router.get('/doctors/:doctorId/appointments', AppointmentController.getAppointmentsByDoctorId)
router.get('/patients/:patientId/appointments', AppointmentController.getAppointmentByPatientId)



export default router