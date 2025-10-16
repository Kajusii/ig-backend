import { commentModel } from "../../Schema/comment.schema.js";

export const createComment = async (req, res) => {
  const body = req.body;
  const params = req.params;
  const postId = params.postId;
  const user = req.user;
  const comments = await commentModel.create({
    post: postId,
    comment: body.comment,
    user: user._id,
  });
  res.status(200).json(comments);
};
