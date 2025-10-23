import express from "express";
import { login } from "../../controller/user/login.js";
import { signup } from "../../controller/user/signup.js";
import { authMiddleware } from "../../middleware/auth_middleware.js";
import { followUser } from "../../controller/user/toggle-follow.js";
import { getOthersUserData } from "../../controller/user/getOtherUserData.js";
import { getAllUserData } from "../../controller/user/searchUser.js";
import { editProfile } from "../../controller/user/editProfile.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", signup);
userRouter.post("/follow-toggle/:followedUserId", authMiddleware, followUser);
userRouter.get("/profile/:userId", authMiddleware, getOthersUserData);
userRouter.get("/allusers", authMiddleware, getAllUserData);
userRouter.post("/editprofile", authMiddleware, editProfile);

export default userRouter;
