import { postModel } from "../../Schema/post.schema.js";

export const createPost = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const post = await postModel.create({
    user: user._id,
    caption: body.caption,
    images: body.images,
  });
  res.json(post);
};
