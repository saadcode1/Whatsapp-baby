import { Box,styled } from "@mui/material";
import { useContext } from "react";
import { AcountContext } from "../Context/AccountProvider";
export default function ChatHeader({person}){

    const {active}=useContext(AcountContext);
    const Image=styled('img')`
    width:3vw;
    height:3vw;
    border-radius:50%;
    padding:3px 13px 3px 13px;
    
`

    const Component=styled(Box)`
    display:flex;
    align-items:center;
    background-color:grey;
    padding:-2px 8px -2px 8px;
    `
    return(
        <Component>
             <Box>
                <Image src={person.picture} alt="dp"/>
             </Box>
             <h2>{person.name}</h2>
             &nbsp;&nbsp;&nbsp;
             <h5>{active.find(user=> user.sub === person.sub)?"Online":"Offline"}</h5>
        </Component>
    )
}