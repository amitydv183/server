const mongoose = require("mongoose");
const LiveUrl ='mongodb+srv://amkr9329:amit123@cluster0.ma9dmog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async ()=>{
    return mongoose.connect(LiveUrl)

    .then(()=>{
        console.log("database connection successful");
    })
    .catch((error)=>{
        console.log("not connected",error);
    });
};

module.exports = connectDB;