import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect } from "react";
import { AcountContext } from "../Context/AccountProvider";
import { newMessage, getMessage } from "../../services/api";
import Message from "./Message";
// import Message from "./Message";

export default function ChatMessage({ person, conversation }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [messageFlag,setMessageFlag]=useState(false);
  const { account,socket } = useContext(AcountContext);
  const [incomineMsg, setIncomingMsg] = useState(null);

  useEffect(() => {
    async function fetchMessage() {
      if (conversation && conversation._id) {
        let messageData = await getMessage(conversation._id);
       await setMessage(messageData.data.data); 
        console.log(message,"state");
      }
    }
    fetchMessage();
  }, [person._id, conversation._id,messageFlag]);

  useEffect(()=>{
    socket.current.on("getMessage",data=>{
    setIncomingMsg({
      ...data,
      createdAt:Date.now(),
    })
    })
  },[])

  useEffect(()=>{
    incomineMsg && conversation?.members?.includes(incomineMsg.senderId)&&
    setMessage(prev=>[...prev,incomineMsg]);
  },[incomineMsg,conversation])

  const sendText = async (e) => {
    console.log(account);
    if (e.key === "Enter") {
      console.log("running key");
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      socket.current.emit("sendMessage",message);
      await newMessage(message);
      setValue("");
      setMessageFlag(prev=>!prev);
    }
  };

  const Component = styled(Box)`
    background: url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg");
    background-size: 50%;
    width: 100%;
    height: 80vh;
  `;

  const Overflow = styled(Box)`
    overflow: scroll;
    height: 80vh;
    z-index:999;
  `;

  return (
    <Box>
      <Component>
        <Overflow>
        {
  message ? message.map((msg,idx)=>{
    return <Message key={idx} msg={msg} conversation={conversation}/>;
  }):<div>No message</div>
}
        </Overflow>
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Box>
  );
}