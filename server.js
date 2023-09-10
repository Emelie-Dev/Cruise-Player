 // Modules

 import dotenv from "dotenv";

dotenv.config({path: "./config.env"});

 import app from "./app.js";
 
 import * as mongoose from "mongoose";



 // Mongoose Connection

//  mongoose.connect(process.env.LOCAL_CON_STR, {

//     useNewUrlParser: true,
//     useUnifiedTopology: true  
  
//  })

//  .then((res) => {
//     console.log("DB Connection Successful...")
//  })
// .catch((err) => {
//     console.log(`Connection Error: ${err}`)
// })

(async () => {

   try {

 let conn = await mongoose.connect(process.env.LOCAL_CON_STR, {
   useNewUrlParser: true
   
 })

 console.log("DB Connection Successfull...\n");
 
   } catch(err) {

      console.log(`Connection Error: ${err}`)

   }

})();


const port = process.env.PORT || 1000;

 const server = app.listen(port, (err) => {
    console.log("The server has started....\n");
    if(err) {
        console.log(err)
    } 
 })
