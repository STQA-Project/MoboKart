require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connection = require("./database/db");

//setting up the server..
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connection();
  console.log(`listening on port ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// setting up the routes..
