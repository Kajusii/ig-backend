import express from "express";
import { createPost } from "../../controller/post/create-post.js";
import { getPost } from "../../controller/post/get-post.js";
import { authMiddleware } from "../../middleware/auth_middleware.js";
import { getUserPost } from "../../controller/post/get-profilepost.js";
import { likesPost } from "../../controller/post/likes.js";
import { getOthersUserPost } from "../../controller/post/get-other-userPost.js";
import { deletePost } from "../../controller/post/delete-post.js";
import { editPost } from "../../controller/post/edit-post.js";

const postRouter = express.Router();

postRouter.post("/create", authMiddleware, createPost);

postRouter.post("/likes/:postId", authMiddleware, likesPost);
postRouter.get("/allpost", authMiddleware, getPost);
postRouter.get("/userpost", authMiddleware, getUserPost);
postRouter.get("/profile/:userId", authMiddleware, getOthersUserPost);
postRouter.delete("/delete/:postId", authMiddleware, deletePost);
postRouter.post("/edit/:postId", authMiddleware, editPost);
export default postRouter;
