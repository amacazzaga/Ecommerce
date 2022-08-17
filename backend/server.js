require(`dotenv`).config();
const express = require(`express`);
const mongoose = require(`mongoose`);
const userRoutes = require(`./routes/user`);

// express app//
const app = express(); //settting the app to express
//middleware//
/*Las funciones de middleware son funciones que tienen acceso al objeto
de solicitud (req), y al objeto de respuesta (res)*/
app.use(express.json());
app.use(`/`,(req,res,next)=>{
    console.log(req.method)
    next()
})
app.use(`/user`, userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      //port 4000
      console.log("connected to db & listening one", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
