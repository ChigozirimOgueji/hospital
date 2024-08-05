import UserModel from "../models/user.model.js";

// class UserService {
// // Base for all user tpyes
// // create a new user
//     async createUser(data) {
//         const user = await UserModel.create(data);
//         return user;
//     }

// // get  user  by  id
//     async getUserById(id){
//         const user = await UserModel.findById(id);
//         return user;
//     }
// // update user by id
//     async updateUser(id, data) {
//         const user = await UserModel.findByIdAndUpdate(id, data, {new: true});
//         return user;
//     }

// // delete user by the id
//     async deleteUser(id) {
//         const user = await UserModel.findByIdAndDelete(id);
//         return user;
//     }

// }

// export default new UserService();