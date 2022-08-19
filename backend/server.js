require(`dotenv`).config();
const express = require(`express`);
const mongoose = require(`mongoose`);
const userRoutes = require(`./routes/users`);
const productRoutes = require(`./routes/products`)


// express app//
const app = express(); //setting the app to express
//middleware//
/*Las funciones de middleware son funciones que tienen acceso al objeto
de solicitud (req), y al objeto de respuesta (res)*/
app.use(express.json());
app.use(`/`,(req,res,next)=>{
    console.log(req.method)
    next()
})
//user routes//
app.use(`/user`, userRoutes);
//product routes//
app.use(`/product`, productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      //port 4000
      console.log("connected to db & listening on", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
