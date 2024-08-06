import { useContext,useState } from 'react';
import {AcountContext} from "../Context/AccountProvider";
import { GoogleLogin } from '@react-oauth/google';
import Dialog from '@mui/material/Dialog';
import { jwtDecode } from "jwt-decode";
import { Button,Box } from '@mui/material';
import styled from '@emotion/styled';
import addUsers from "../../services/api.js";
export default function LoginDialog(){
    
    const {setAccount}=useContext(AcountContext);

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    const onLogin=(res)=>{
     let decoded=jwtDecode(res.credential);
     setAccount(decoded);
     addUsers(decoded);
    }
    const onError=(res)=>{
     console.log("error...",res);
    }

    const Btn=styled(Button)`
          margin-top:22%;
          left:45%;
          background-color:white;
    `
    const Dlg={
      height:"40vw",
      width:"50vw",
      background:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dVsRLuHm0__SZ_RvE6KWAPscPyaWkoppLQ&s')"
    }

    const Div=styled(Box)`
    display:flex;
   justify-content:center;
  align-items:center;
    flex-direction:column;
    margin-top:20%;
    `
    return(
        <>
        <Btn variant="outlined" onClick={handleClickOpen}>
           SingIn
         </Btn>
          <Dialog PaperProps={{sx:Dlg}} onClose={handleClose}
          open={open} hideBackdrop={true}>
            <Div>
            <h2>Welcom to our Community :)</h2>
            <p>Join With us Make Connections!</p>
            <p>SignIn With Secure Network :)</p>
            <GoogleLogin onSuccess={onLogin} onError={onError}/>
            </Div>
           
          </Dialog>
          </>
     
    )
}