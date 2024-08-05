import { Router } from "express";
const router = Router();
import HospitalController from "../controllers/hospital.controller.js"
import { createHospitalSchema } from "../schema/hospital.schema.js"
import validate from "../middlewares/validate.middleware.js";
// validate, authenticate, isadmin

// //ENDPOINT -> AUTHENTICATION -> AUTHORIZATION -> VALIDATION -> CONTROLLER METHOD
router.post("/", validate(createHospitalSchema), HospitalController.createHospital)
router.get("/allhospitals", HospitalController.getAllHospitals)
router.get("/query", HospitalController.getHospitalByQuery)
router.get("/:hospitalId", HospitalController.getHospitalById)
router.patch("/:hospitalId", HospitalController.updateHospital)
router.delete("/:hospitalId", HospitalController.deleteHospital)
router.post("/hospitals/:hospitalId/doctors", HospitalController.addDoctorToHospital)
router.delete("/hospitals/:hospitalId/doctors/:doctorId", HospitalController.removeDoctorFromHospital)
router.post(" /hospitals/:hospitalId/specialties", HospitalController.addSpecialtyToHospital)
router.delete(" /hospitals/:hospitalId/specialties/:specialtyId", HospitalController.removeSpecialtyFromHospital)
// router.post("/hospitals/:hospitalId/admin", HospitalController.addAdminToHospital)
// router.delete("/hospitals/:hospitalId/admin/:adminId", HospitalController.removeAdminFromHospital)

export default router;