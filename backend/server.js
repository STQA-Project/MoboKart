import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// Listen for body events
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/users", userRouter);

// error middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
