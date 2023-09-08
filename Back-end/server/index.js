const express = require("express");
const connectDatabase = require('../db/config');
const userRoutes = require('../db/Routes/userRoutes');
const productRoutes = require('../db/Routes/productRoutes.js'); // Check the path

const PORT = 5001;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

connectDatabase(); // Call the database connection function

app.use('/', userRoutes);
app.use('/', productRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
