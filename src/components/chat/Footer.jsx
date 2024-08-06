import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { InputBase,Box } from "@mui/material"
export default function Footer({sendText,setValue,value}){
    const Component=styled(Box)`
    background-color:grey;
    height:2.3vw;
    display:flex;
    align-items:center;
    justify-content:start;
    `
    const Inputs=styled(InputBase)`
     background-color:white;
    
     width:50%;
     border:1px solid black;
    `
    return(
        <Component>
            &nbsp;&nbsp;&nbsp;
            <EmojiEmotionsIcon/>
            <Inputs 
       placeholder="type Something..."
             onKeyDown={(e) => {
                if(e.key === 'Enter')
                    sendText(e) 
            }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
        </Component>
    )
}