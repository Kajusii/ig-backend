import express from "express";
import { createComment } from "../../controller/comment/create-comment.js";
import { authMiddleware } from "../../middleware/auth_middleware.js";
import { getAllComments } from "../../controller/comment/getcomment.js";
import { deleteComment } from "../../controller/comment/delete-comment.js";

export const commentRouter = express.Router();
commentRouter.post("/create/:postId", authMiddleware, createComment);
commentRouter.get("/create/:postId", authMiddleware, getAllComments);
commentRouter.delete("/delete/:commentId", authMiddleware, deleteComment);
