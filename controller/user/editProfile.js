import { userModel } from "../../Schema/user.schema.js";
export const editProfile = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const userId = user._id;
  const data = await userModel.findByIdAndUpdate(userId, {
    username: body.username,
    bio: body.bio,
    profilePicture: body.profilePicture,
  });
  res.status(200).json(data);
};
