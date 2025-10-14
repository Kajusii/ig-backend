import { userModel } from "../../Schema/user.schema.js";

export const followUser = async (req, res) => {
  const followedUserId = req.params.followedUserId;
  const followingUserId = req.user._id;
  const followingUser = await userModel.findById(followingUserId);
  const followedUser = await userModel.findById(followedUserId);
  const alreadyFollowed = followedUser.followers.includes(followingUserId);
  if (followedUserId === followingUserId) {
    res.status(400).json("uuriigoo dagaj bolohgu");
    return;
  }
  if (alreadyFollowed) {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: followingUser.following.filter((item) => {
        return item.toString() !== followedUserId;
      }),
    });
    await userModel.findByIdAndUpdate(followedUserId, {
      followers: followedUser.followers.filter((item) => {
        return item.toString() !== followingUserId;
      }),
    });

    res.json("unfollowed");
  } else {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: [...followingUser.following, followedUserId],
    });
    await userModel.findByIdAndUpdate(followedUserId, {
      followers: [...followedUser.followers, followingUserId],
    });
  }
  res.json("success");
};
