import ChatHeader from "./ChatHEader";
import ChatMessage from "./ChatMessage";
import { useContext,useState,useEffect } from "react";
import { AcountContext } from "../Context/AccountProvider";
import { getConversation } from "../../services/api";
export default function ChatBox(){
    let [conversation,setConversation]=useState({});
    let {person,account}=useContext(AcountContext);

    useEffect(()=>{
        async function getConversationDetails(){
            const data=await getConversation({senderId:account.sub,receiverId:person.sub});
           setConversation(data);
            console.log(conversation,"setConnversation");
        }
        getConversationDetails();
    },[person.sub]);
    return(<>
            <ChatHeader person={person}/>
            <ChatMessage person={person} conversation={conversation}/>
    </>)
}