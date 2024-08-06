import Conversation from "../models/conversation.js";

const conversationAdd = async (req, res) => {
  try{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
    if (exist) {
      console.log("exists",exist)
      return res.status(200).json({ msg: "conversation is already" });
    }
  
    const newConversation = new Conversation({
      members: [senderId, receiverId]
    });
  
    await newConversation.save();
    res.status(200).json("conversation was saved");
    
  }catch(error){
    console.log("error while insertin data into mongo",error.message);
  }
  
};

const getConversation = async (req, res) => {
  try{
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const data = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
    console.log(data,"backend");
      return res.status(200).json(data);
  }catch(error){
    console.log("error while fetchin data from mongo",error.message);
  }
 

};

export {conversationAdd,getConversation}