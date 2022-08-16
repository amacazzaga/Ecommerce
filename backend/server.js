require (`dotenv`).config()
const express = require(`express`)
const mongoose = require(`mongoose`)

// express app//
const app = express();//settting the app to express

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT, () => { //port 4000
    console.log("connected to db & listening on", process.env.PORT);
  }); 
})
.catch((err)=>{
  console.log(err)
})