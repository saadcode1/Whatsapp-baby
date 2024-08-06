let url="http://localhost:3000";
import axios from "axios";
let addUsers=async (data)=>{
    try{
        let response=await axios.post(`${url}/addusers`,data);
        
    }catch(error){
        console.log(error.message);
    }
   
}
export default addUsers;

let conversations=async (data)=>{
    try{
      await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log("error while creating conversations",error.message)
    }
}
 
let getConversation=async (conversationsId)=>{
    try{
        const response=await axios.post(`${url}/conversation/get`,conversationsId);
        return response.data;
    }catch(error){
        console.log("error while geting conversation details",error.message);
    }
     
}

let newMessage=async (data)=>{
    try{
        let response=await axios.post(`${url}/message/add`,data);
        console.log(response)
    }catch(error){
        console.log("error while sending message to user!",error.message);
    }
    
}

let getMessage=async (id)=>{
     try{
            let response=await axios.get(`${url}/message/get/${id}`);
            return response;
     }catch(error){
        console.log("error while fetching message to user!",error.message);
     }
}

export {conversations,getConversation,newMessage,getMessage};
