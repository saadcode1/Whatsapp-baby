import { Server } from "socket.io";

let users=[];

const addUsers=(userData,socketId)=>{
    !users.some(user=>user.sub == userData.sub)&& users.push({...userData,socketId});
    console.log(users);
}

const io=new Server(9000,{
    cors:{
        origin:"http://localhost:5173",
    }
})

const getUser=(userId)=>{
    return users.find(user =>user.sub == userId);
}

io.on("connection",(socket)=>{
   console.log("a user conncted");

   socket.on("addUsers",userData=>{
    addUsers(userData,socket.id);
   })
   io.emit("getUsers",users);

   socket.on("sendMessage",data=>{
    const user= getUser(data.receiverId);
    io.to(user.socketId).emit("getMessage",data);
   })
})