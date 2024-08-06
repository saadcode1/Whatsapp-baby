import styled from "@emotion/styled"
import { Box } from "@mui/material"
export default function EmptyChat(){
    const Image=styled('img')`
    background-position:center;
    background:cover;
    width:70vw;
    height:42vw;
    overflow:hidden;
    `
    const Component=styled(Box)`
     overflow:hidden;
    `
    return(<Component>
           <Image src="https://mobiletrans.wondershare.com/images/images2024/how-to-hide-whatsapp-chat-on-android-iphone-01.jpg" alt="emptyChat"/>
    </Component>)
}