import { userModel } from "../../Schema/user.schema.js";
export const getAllUserData = async (req, res) => {
  const data = await userModel.find();

  res.status(200).json(data);
};
