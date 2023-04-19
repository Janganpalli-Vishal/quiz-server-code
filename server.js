import express  from "express";
import cors from 'cors'
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/conn.js";

const app = express();

// middlewares
app.use(cors())
app.use(express.json())
app.use('', router)
config()


const port = process.env.PORT || 5000;

connect().then(()=>{
    try{
        app.listen(port, ()=>{
            console.log("listening to port 5000")
        })
    }catch(err){
        console.log("cannot connect with the server", err)
    }
}).catch(err =>{
    console.log("failed to connect with database", err)
})
