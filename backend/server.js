require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const salesRoutes = require('./routes/sales');
const imagesRoutes = require('./routes/images');
const password = process.env.password
const user = process.env.user
// express app
const app = express();


// middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// routes
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/sales', salesRoutes);
app.use('/images', imagesRoutes);

// mongoose connect and HTTP server
mongoose
  .connect( `mongodb+srv://${user}:${password}@cluster0.aipeqgp.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(4000, () => {
      console.log('Connected to DB & listening on port 4000 (HTTP)');
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });
