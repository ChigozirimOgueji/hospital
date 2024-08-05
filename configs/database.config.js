import mongoose from "mongoose";

function connectToMongodb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongodb is connected");
    })
    .catch(()=>{
        console.log("Error connecting to db")
    })
}

export default connectToMongodb;
