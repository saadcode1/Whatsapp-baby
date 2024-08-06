import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/user.js";

let app=express();
app.use(cors());
main()
  .then(() => {
    console.log("connections successfully done with MongoDb :)");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp-baby');
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",router);
app.listen(3000,()=>{
    console.log("connection successfully with Node :)");
})