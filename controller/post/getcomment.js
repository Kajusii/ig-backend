import { postModel } from "../../Schema/post.schema.js";

export const getAllComments = async (req, res) => {
  const allcomments = await postModel.find().populate("comment");
  res.status(200).json(allcomments);
};
