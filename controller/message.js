import Message from "../models/message.js";
import Conversation from "../models/conversation.js";
const newMessage = async (req, res) => {
   try {
     const message = req.body;
     const newMessage = new Message(message);
     await newMessage.save();
     await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
     await newMessage.save();
     return res.status(200).json("message was saved");
   } catch (error) {
     console.log("error while inserting data into mongo", error.message);
     return res.status(500).json({ message: "Error sending message" });
   }
 };
 
 const getMessage = async (req, res) => {
   try {
     const conversationId = req.params.id;
     const data = await Message.find({ conversationId: conversationId });
     return res.status(200).json({data:data});
   } catch (error) {
     console.log("error while fetching message", error.message);
     return res.status(500).json({ message: "Error fetching message" });
   }
 };
export {newMessage,getMessage};