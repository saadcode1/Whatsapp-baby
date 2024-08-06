import React, { useState } from 'react';
import { useContext } from 'react';
import { AcountContext } from '../Context/AccountProvider.jsx';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Menu from "../Menu/Menu.jsx";
import EmptyChat from './EmptyChat.jsx';
import ChatBox from './ChatBox.jsx';
export default function ChatDialog(){
    let [open,setOpen]=useState(true);
    let {person}=useContext(AcountContext);
     const dialog={
        width:"98vw",
        height:"95vh"
     }

     const Component=styled(Box)`
     display:flex;
     `
     const LeftBox=styled(Box)`
     width:30vw;
     `
     const RightBox=styled(Box)`
     width:70vw;
     height:95vh;
     `
    return(
          <Dialog fullScreen open={open} PaperProps={{sx:dialog}} hideBackdrop={true}>
            <Component>
                <LeftBox>
                    <Menu/>
                </LeftBox>
                <RightBox>
                 {Object.keys(person).length ? <ChatBox/>:<EmptyChat/>}
                </RightBox>
            </Component>
          </Dialog>
    )
}