import { request } from "express";
import HospitalService from "../services/hospital.service.js"

class HospitalController{

    // Create new hospital
    async createHospital(req,res){
        const hospitalData = req.body;
        const newHospital = await HospitalService.createHospital(hospitalData);
        res.status(201).send({
            success:true,
            message:"Hospital registered successfully",
            newHospital
        })
    }

    // finds a hospital the matches an id
    async getHospitalById(req,res){
       const hospitalId = req.params.hospitalId;
       const hospital = await HospitalService.getHospitalById(hospitalId); 
       if (!hospital){
            return res.status(404).send({
                message: "Invalid_id",
                success: false
            })
       }
       return res.status(200).send({
        success: true,
        hospital
       })
    }

    // returns the hospital that matches the query
    async getHospitalByQuery(req, res){
       const hospitalQuery = req.query;
       const hospitalQueried = await HospitalService.getHospitalByQuery(hospitalQuery)
       res.status(200).send({
            success: true,
            hospitalQueried
       })

    }

    // returns a list of all the hospitals
    async getAllHospitals(req, res){
        const hospitals = await HospitalService.getAllHospitals();
        res.status(200).send({
            success: true,
            hospitals
        })
    }

    // find a product by the id and updates
    async updateHospital(req, res){
        const hospitalId = req.params.hospitalId;
        const data = req.body;
        const foundHospital = await HospitalService.getHospitalById(hospitalId)
        if(!foundHospital){
            return res.status(404).send({
                message: "invalid_id",
                success: false
            })
        }
        const hospital = await HospitalService.updateHospital(hospitalId, data);
            res.status(200).send({
                success: true,
                hospital
    })
    }

    // delete the hospital by id
    async deleteHospital(req, res){
       const hospitalId = req.params.hospitalId;
       const foundHospital = await HospitalService.getHospitalById(hospitalId);
       if(!foundHospital){
        return res.status(404).send({
            message: "invalid_id",
            success: false
        })
    }
        const hospital = await HospitalService.deleteHospital(hospitalId);
        return res.status(200).send({
            success:true,
            hospital
        })
    }

    async addDoctorToHospital(req,res){
        try {
            const hospitalId = req.params.hospitalId;
            const doctorId = req.body.doctorId; // Assuming doctorId is sent in the request body
            await HospitalService.addDoctorToHospital(hospitalId, doctorId);
            res.status(200).send({
                success: true,
                message: 'Doctor added to hospital successfully.'
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }

    // Removes a doctor from a hospital
    async removeDoctorFromHospital(req, res){
        try {
            const hospitalId = req.params.hospitalId;
            const doctorId = req.body.doctorId; // Assuming doctorId is sent in the request body
            await HospitalService.removeDoctorFromHospital(hospitalId, doctorId);
            res.status(200).send({
                success: true,
                message: 'Doctor removed from hospital successfully.'
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }

    async addSpecialtyToHospital(){
        try {
            const hospitalId = req.params.hospitalId;
            const specialtyId = req.body.specialtyId; 
            await hospitalService.addSpecialtyToHospital(hospitalId, specialtyId);
            res.status(200).send({
                success: true,
                message: 'Specialty added to hospital successfully.'
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }


    async removeSpecialtyFromHospital(){
try {
        const hospitalId = req.params.hospitalId;
        const specialtyId = req.body.specialtyId; 
        await HospitalService.removeSpecialtyFromHospital(hospitalId, specialtyId);
        res.status(200).send({
            success: true,
            message: 'Specialty removed from hospital successfully.'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
    }

    // async addAdminToHospital(){
    //     try {
    //         const hospitalId = req.params.hospitalId;
    //         const adminId = req.body.adminId; 
    //         await HospitalService.addSpecialtyToHospital(hospitalId, adminId);
    //         res.status(200).send({
    //             success: true,
    //             message: 'Admin added to hospital successfully.'
    //         });
    //     } catch (error) {
    //         res.status(500).send({
    //             success: false,
    //             message: error.message
    //         });
    //     }
    // }

    // async removeAdminFromHospital(){
    //     try {
    //         const hospitalId = req.params.hospitalId;
    //         const adminId = req.body.adminId; 
    //         await HospitalService.removeAdminFromHospital(hospitalId, adminId);
    //         res.status(200).send({
    //             success: true,
    //             message: 'Admin removed from hospital successfully.'
    //         });
    //     } catch (error) {
    //         res.status(500).send({
    //             success: false,
    //             message: error.message
    //         });
    //     }
    // }
}
   
  
export default new HospitalController();