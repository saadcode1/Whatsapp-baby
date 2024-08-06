import mongoose from "mongoose";
const Schema = mongoose.Schema;

let messageSchema=new Schema({
    conversationId:{
        type:String,
    },
    receiverId:{
        type:String,
    },
    senderId:{
        type:String,
    },
    text:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

export default mongoose.model("Message",messageSchema);