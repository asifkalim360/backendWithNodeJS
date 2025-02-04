/*
Option B: Inline configuration (optional)
If you want to specify a custom path for your .env file:

import { config } from 'dotenv';
config({ path: './custom.env' });
*/ 

//Option A: Using the default import
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

//CONFIG DOTENV 
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=> {
    app.on("error", (error)=> {
        console.log("ERROR", error);
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at post : ${process.env.PORT}`);   
    })
})
.catch((err)=> {
    console.log("MONGODB connection Failed!!! ", err);
    
});








/*
import express from "express"; 
const app = express(); 

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on post ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error", error);
        throw err  
    }
})()

*/