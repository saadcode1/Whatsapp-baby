import React from "react";
import { useContext } from "react";
import { AcountContext } from '../Context/AccountProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ImageDialog from "./ImageDialog";
import Search from "./Search";
import Conversation from "./Conversation";
export default function MenuHeader(){
    let {account}=useContext(AcountContext);
    let [open,setOpen]=React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const Header=styled(Box)`
    background-color:lightblue;
    height:4vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:2px 10px 2px 10px;
    `
    const Image=styled('img')`
        width:3vw;
        height:3vw;
        border-radius:50%;
    `
        
    
    return(<>
            <Header>
                <Box>
                <Image onClick={handleClickOpen} src={account.picture} alt="profile"/>
                </Box>
                <h3>{account.name}</h3>
                <MoreVertIcon/>
                <ImageDialog open={open} setOpen={setOpen} account={account}/>
            </Header>
            <Search/>
            <Conversation/>

    </>)
}