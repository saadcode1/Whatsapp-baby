import mongoose from "mongoose";
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
      members:{
        type:Array
      },
      message:{
        type:String,
      }},
      {
        timestamps:true,
      }
      );

const Conversation = mongoose.model("Coversation", conversationSchema);

export default Conversation;