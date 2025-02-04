import express from "express"; 
import cors from "cors"; 
import cokieParser from "cookie-parser"; 


const app = express(); 

//CORS 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:  true,
}))

// JSON SETTING MIDDLEWARE. 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")); 

//SET COOKIE PARSER
app.use(cokieParser());

export {app}