import React from 'react';
import Dialog from '@mui/material/Dialog';
export default function ImageDialog({open,setOpen,account}){
    
      const handleClose = () => {
        setOpen(false);
      };

      const dialog={
        width:"25vw",
        height:"25vw",
        borderRadius:"50%",
      }

    return(<Dialog PaperProps={{sx:dialog}}  open={open}
        onClose={handleClose}>
          <img src={account.picture} alt="dp"/>
        </Dialog>
        )}