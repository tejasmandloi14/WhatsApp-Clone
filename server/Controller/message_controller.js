import Message from "../model/Message.js"
import Conversation from "../model/Conversation.js";

export const newMessage = async (req,res)=>{
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message : req.body.text});
        return res.status(200).json("Messga Sent Successfully !");
    }
    catch(e){
        return res.status(500).json("Error while sending messgae !");
    }
}


export const getMessages = async(req,res)=>{
    try{
        const messages = await Message.find({conversationId: req.params.id})
        return res.status(200).json(messages);
    }
    catch(e){
        return res.status(500).json("Error while fetching messgae !");
    }
}