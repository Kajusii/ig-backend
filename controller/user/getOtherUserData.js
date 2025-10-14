import { userModel } from "../../Schema/user.schema.js";
export const getOthersUserData = async (req, res) => {
  const params = req.params;
  const userId = params.userId;
  const data = await userModel.findById(userId);

  res.status(200).json(data);
};
