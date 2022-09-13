require(`dotenv`).config();
const express = require(`express`);
const mongoose = require(`mongoose`);
const userRoutes = require(`./routes/users`);
const productRoutes = require(`./routes/products`);
const salesRoutes = require(`./routes/sales`);
// express app//
const app = express(); //setting the app to express
//middleware//
/*Las funciones de middleware son funciones que tienen acceso al objeto
de solicitud (req), y al objeto de respuesta (res)*/
app.use(express.json());
app.use(`/`, (req, res, next) => {
  console.log(req.method);
  next();
});
//user routes//
app.use(`/user`, userRoutes);
//product routes//
app.use(`/product`, productRoutes);
//sales routes//
app.use(`/sales`, salesRoutes);
//mongoose connect//
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //once in mongoose//
    app.listen(process.env.PORT, () => {
      //port 4000
      console.log("connected to db & listening on", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
