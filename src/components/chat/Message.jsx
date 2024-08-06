import styled from "@emotion/styled"
import { Box } from "@mui/material";
import { useContext } from "react";
import { AcountContext } from "../Context/AccountProvider";


const Right=styled(Box)`
  background-color:lightgreen;
  width:15vw;
  word-break:break;
  border-radius:10px;
  margin-left:75%;
  margin-top:10px;
  padding:5px 5px 5px 5px;
`

const Left=styled(Box)`
background-color:yellow;
width:15vw;
word-break:break;
border-radius:10px;
margin-left:3%;
margin-top:10px;
padding:5px 5px 5px 5px;
`

const Time=styled(Box)`
    font-size:11px;
    margin-left:40%;
`

export default function Message({msg,conversation}){
    const {account}=useContext(AcountContext);
    return(
        <>
          {
            account.sub === msg.senderId ?<Right>
                {msg.text}
               <Time> {
                    msg.createdAt
                }</Time>
            </Right>:<Left>
                {
                    msg.text
                }
                  <Time> {
                    msg.createdAt
                }</Time>
            </Left>
          }
         </>
    )
}