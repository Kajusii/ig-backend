import { postModel } from "../../Schema/post.schema.js";

export const getOthersUserPost = async (req, res) => {
  const params = req.params;
  const userId = params.userId;
  const post = await postModel.find({ user: userId });

  res.status(200).json(post);
};
