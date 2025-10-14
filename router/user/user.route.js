import express from "express";
import { login } from "../../controller/user/login.js";
import { signup } from "../../controller/user/signup.js";
import { authMiddleware } from "../../middleware/auth_middleware.js";
import { followUser } from "../../controller/user/toggle-follow.js";
import { getOthersUserData } from "../../controller/user/getOtherUserData.js";

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/follow-toggle/:followedUserId", authMiddleware, followUser);
userRouter.get("/profile/:userId", authMiddleware, getOthersUserData);

export default userRouter;
