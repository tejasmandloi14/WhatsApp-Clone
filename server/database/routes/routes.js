import express from "express";
import { addUser,getUsers } from "../../Controller/controller_user.js";
import { newConversation,getConversation } from "../../Controller/newConversation.js";
import { getMessages, newMessage } from "../../Controller/message_controller.js";
import { uploadFile } from "../../Controller/image_controller.js";
import upload from '../../utils/upload.js'
import { getImage } from "../../Controller/image_controller.js";
const route = express.Router();
route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/messages/add',newMessage);
route.get('/messages/get/:id',getMessages)
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);
export default route;