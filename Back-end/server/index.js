const express = require("express");
const connectDatabase = require('../db/config');
const userRoutes = require('../db/Routes/userRoutes');
const productRoutes = require('../db/Routes/productRoutes.js'); // Check the path
const portfinder = require('portfinder');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

connectDatabase(); // Call the database connection function

app.use('/', userRoutes);
app.use('/', productRoutes);

portfinder.getPort((err, port) => {
  if (err) {
    console.error(err);
  } else {
    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
});
module.exports = app;
