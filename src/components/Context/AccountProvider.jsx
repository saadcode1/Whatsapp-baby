import { createContext,useState,useRef,useEffect } from "react";
import {io} from "socket.io-client";
export const AcountContext=createContext(null);
export default function AccounProvider({children}){
   
    const [account,setAccount]=useState();
    const [person,setPerson]=useState({});
    const [active,setActive]=useState([]);

    const socket=useRef();
    
    useEffect(()=>{
        socket.current= io('ws://localhost:9000');
    },[]);


    return(
        <AcountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            active,
            setActive,

        }}>
         {children}
        </AcountContext.Provider>
    )
    
}