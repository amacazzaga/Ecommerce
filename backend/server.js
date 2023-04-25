require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);
const fs = require("fs");
const https = require("https");
const userRoutes = require(`./routes/users`);
const productRoutes = require(`./routes/products`);
const salesRoutes = require(`./routes/sales`);
const imagesRoutes = require(`./routes/images`);
// express app//
const app = express(); //setting the app to express
const privateKey = fs.readFileSync("./sslcert/server.key", "utf-8");
const certificate = fs.readFileSync("./sslcert/server.crt", "utf-8");
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);
//
app.use(cors());
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
//images routes//
app.use(`/images`, imagesRoutes);
//mongoose connect//
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //once in mongoose//
    httpsServer.listen(process.env.PORT, () => {
      //port 4000
      console.log("connected to db & listening on", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
