import { useContext } from 'react';
import { AcountContext } from './Context/AccountProvider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import LoginDialog from './account/LoginDialog';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ChatDialog from './chat/ChatDialog';

export default function Messanger(){
    const {account}=useContext(AcountContext);
    const clientId='822961414993-6ojce53qqc9umci9g9delk2imdpa9qal.apps.googleusercontent.com';
    const Component=styled(Box)`
    height:100vh;
    background-color:grey;
    z-index:5;
    `
    const Header=styled(AppBar)`
     height:10vw;
     z-index:0;
    `
  
    return(
        <GoogleOAuthProvider clientId={clientId}>
            {
                account ? <>
                 <Header>
            <Toolbar>

            </Toolbar>
        </Header>
                <ChatDialog/></>:
         
        <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDialog/>
        </Component>
}
        </GoogleOAuthProvider>
    )
}