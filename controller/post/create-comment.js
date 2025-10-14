import { commentModel } from "../../Schema/comment.schema.js";
import { postModel } from "../../Schema/post.schema.js";

export const createComment = async (req, res) => {
  const body = req.body;
  const params = req.params;
  const postId = params.postId;
  const user = req.user;
  const comments = await commentModel.create({
    comment: body.comment,
    user: user._id,
  });

  const post = await postModel.findById({ postId });
  console.log(post);
  const postcomment = await postModel
    .findByIdAndUpdate(postId, {
      comment: comments,
    })
    .populate("comment");
  res.json(postcomment);
};
