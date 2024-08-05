import {Router} from "express"
const router = Router();
import hospitalRouter from "./hospital.route.js"
import appointmentRouter from "./appointment.route.js"


router.use("/api/v1/hospital", hospitalRouter);
router.use("/api/v1/appointment", appointmentRouter);


export default router;