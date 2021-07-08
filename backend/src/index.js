const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const app = express();

/* Middleware */
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
