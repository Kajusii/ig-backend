import { commentModel } from "../../Schema/comment.schema.js";

export const getAllComments = async (req, res) => {
  const user = req.user._id;
  const post = req.params.postId;
  const allcomments = await commentModel
    .find({ post: post })
    .populate({
      path: "post",
      populate: { path: "user" },
    })
    .populate("user");
  res.status(200).json(allcomments);
};
