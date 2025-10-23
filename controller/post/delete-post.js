import { postModel } from "../../Schema/post.schema.js";

export const deletePost = async (req, res) => {
  const postId = req.params.postId;

  const deletePost = await postModel.findByIdAndDelete(postId);
  res.json(deletePost);
};
