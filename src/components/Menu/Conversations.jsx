
import { useContext,useEffect } from "react";
import { AcountContext } from "../Context/AccountProvider";
import { conversations } from "../../services/api";
import styled from "@emotion/styled"
import { Box } from "@mui/material"


export default  function Conversations({users}){
    const {setPerson,account,socket,setActive}=useContext(AcountContext);
   async function getuser(){
      setPerson(users);
     await conversations({senderId:account.sub,receiverId:users.sub});
    }

    useEffect(()=>{
        async function setSocket(){
        socket.current.emit("addUsers",account);
        socket.current.on("getUsers",users=>{
            console.log(users,"emiting")
            setActive(users);
        })
    }
    setSocket();
    },[])


    const Component=styled(Box)`
    background-color:lightblue;
    display:flex;
    align-items:center;
    border-bottom:2px solid grey;
    cursor:pointer;
    `
    const Image=styled('img')`
    width:3vw;
    height:3vw;
    border-radius:50%;
    padding:3px 13px 3px 13px;
    
`
    return(
    <><Component onClick={()=>getuser()}>
           <Box >
            <Image src={users.picture} alt="dp"/>
           </Box>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           <h3>{users.email}</h3>
    </Component>
    </>
    )
}