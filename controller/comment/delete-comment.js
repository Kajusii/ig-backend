import { commentModel } from "../../Schema/comment.schema.js";

export const deleteComment = async (req, res) => {
  const commentId = req.params.commentId;

  const deleteComment = await commentModel.findByIdAndDelete(commentId);
  res.json(deleteComment);
};
