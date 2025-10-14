import { postModel } from "../../Schema/post.schema.js";

export const getPost = async (req, res) => {
  const user = await postModel.find().populate("user");
  res.status(200).json(user);
};
