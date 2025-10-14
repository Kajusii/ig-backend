import { connect } from "mongoose";
import express from "express";
import { userModel } from "./Schema/user.schema.js";
import { postModel } from "./Schema/post.schema.js";
import { hash } from "bcrypt";
import { compare } from "bcrypt";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 5555;

const connectToDb = async () => {
  await connect(process.env.MONGO_URI);
};

connectToDb();

app.use("/post", postRouter);
app.use("/", userRouter);

app.get("/gg", async (req, res) => {
  const user = await postModel.find().populate("user");
  res.status(200).json(user);
});

app.listen(port, () => {
  console.log("server is running");
});
