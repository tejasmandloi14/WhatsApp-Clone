import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`,data);
    }
    catch(error){
        console.log('Error',error.message);
    }
}

export const getUsers = async ()=>{
    try{
        let res = await axios.get(`${url}/users`);
        console.log(res);
        return res.data;
    }
    catch(error){
        console.log('Error',error.message);
    }
}

export const setConversation = async (data) =>{
    try{
        axios.post(`${url}/conversation/add`,data)
    }
    catch(err){
        console.log(err.message);
    }
}

export const getConversation = async (data) =>{
    try{
        let res = axios.post(`${url}/conversation/get`,data);
        return (await res).data;
    }
    catch(err){
        console.log(err.message);
    }
}

export const newConversation = async( data)=>{
    try{
        let res = await axios.post(`${url}/messages/add`,data);
    }
    catch(e){
        console.log("Error while calling message"+e.message);
    }
}

export const getMessages = async(id)=>{
    try{
        let res = await axios.get(`${url}/messages/get/${id}`);
        return res.data;
    }
    catch(e){
        console.log("Error"+e.message);
    }
}

export const uploadFile = async (data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }
    catch(e){
        console.log("Error"+e.message);
    }
}