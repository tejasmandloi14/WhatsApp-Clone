import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const Connection = async ()=>{
    const URL = `mongodb://${username}:${password}@ac-wo7ce21-shard-00-00.xvvltj5.mongodb.net:27017,ac-wo7ce21-shard-00-01.xvvltj5.mongodb.net:27017,ac-wo7ce21-shard-00-02.xvvltj5.mongodb.net:27017/?ssl=true&replicaSet=atlas-zisg4l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Whatsapp-Clone`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true});
        console.log("Database Connected ...");
    }
    catch(error){
        console.log(error.message);
    }
}

export default Connection;