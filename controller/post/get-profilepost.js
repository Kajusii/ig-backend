import { postModel } from "../../Schema/post.schema.js";

export const getUserPost = async (req, res) => {
  const userId = req.user._id;
  const user = await postModel.find({ user: userId });

  res.status(200).json(user);
};
