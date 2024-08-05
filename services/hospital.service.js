// • GET /hospitals/:hospitalId/specialties: Get a list of specialties offered by a specific hospital.
// • GET /hospitals/:hospitalId/departments: Get a list of departments within a hospital (e.g., Emergency, Cardiology, Pediatrics).

import HospitalModel from "../models/hospital.model.js";

class HospitalService {

    // creates an existing hospital to the website
    async createHospital(data){
        const hospital = await HospitalModel.create(data);
        return hospital
    }

    // finds a hospital the matches an id
    async getHospitalById(hospitalId){
        const hospital = await HospitalModel.findById(hospitalId);
        return hospital;
    }

    // returns the hospital that matches the query
    async getHospitalByQuery(query){
        const hospital = await HospitalModel.find(query);
        return hospital;
    }

    // returns a list of all the hospitals
    async getAllHospitals(){
        const hospitals = await HospitalModel.find();
        return hospitals;
    }

    // find a product by the id and updates
    async updateHospital(hospitalId, data){
        const updatedHospital = await HospitalModel.findByIdAndUpdate(hospitalId, data, {new: true});
        return updatedHospital;
    }

    // delete the hospital by id
    async deleteHospital(hospitalId){
        const deleteHospital = await HospitalModel.findByIdAndDelete(hospitalId);
        return deleteHospital;
    }

    // Adds a doctor to a hospital
    async addDoctorToHospital(hospitalId, doctorId){
        const hospital = await HospitalModel.findById(hospitalId);
        if (!hospital) {
            throw new Error('Hospital not found');
        }

        hospital.doctors.push(doctorId);
        await hospital.save();

        return hospital;
    }

    // Removes a doctor from a hospital
    async removeDoctorFromHospital(hospitalId, doctorId){
        const hospital = await HospitalModel.findById(hospitalId);
        if (!hospital) {
            throw new Error('Hospital not found');
        }
        hospital.doctors = hospital.doctors.filter(id => id.toString() !== doctorId.toString());
            await hospital.save();

            return hospital;
    }

    // Adds a specialty to a hospital
    async addSpecialtyToHospital(hospitalId, specialtyId){
        const hospital = await HospitalModel.findById(hospitalId);
            if (!hospital) {
                throw new Error('Hospital not found');
            }

            hospital.specialties.push(specialtyId);
            await hospital.save();

            return hospital;
    }

    // Removes a specialty from a hospital 
    async removeSpecialtyFromHospital(hospitalId, specialtyId){
        const hospital = await HospitalModel.findById(hospitalId);
            if (!hospital) {
                throw new Error('Hospital not found');
            }

            hospital.specialties = hospital.specialties.filter(id => id.toString() !== specialtyId.toString());
            await hospital.save();

    }

    // // Add admin to hospital
    // async addAdminToHospital(hospitalId, adminId){
    //     const hospital = await this.getHospitalById(hospitalId);
    //   if (!hospital) {
    //     throw new Error('Hospital not found');
    //   }
    //    // Assuming you have a 'admins' array in your Hospital model
    //    hospital.admins.push(adminId);
    //    await hospital.save();
    //    return hospital;
    // }

    // // Removes an admin from a hospital
    // async removeAdminFromHospital(hospitalId, adminId) {
    //     const hospital = await this.getHospitalById(hospitalId);
    //   if (!hospital) {
    //     throw new Error('Hospital not found');
    //   }

    //   // Assuming you have a 'admins' array in your Hospital model
    //   hospital.admins = hospital.admins.filter((id) => id.toString() !== adminId.toString());
    //   await hospital.save();
    //   return hospital;
    // }
}

export default new HospitalService();