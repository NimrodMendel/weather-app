const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const weatherRoutes = require("./Routes/weather.routes");

const app = express();

/* Middleware */
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* Routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/weather", weatherRoutes);

/* Run server */
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
