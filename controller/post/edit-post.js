import { postModel } from "../../Schema/post.schema.js";

export const editPost = async (req, res) => {
  const body = req.body;
  const postId = req.params.postId;

  const data = await postModel.findByIdAndUpdate(postId, {
    caption: body.caption,
    images: body.image,
  });
  res.status(200).json(data);
};
