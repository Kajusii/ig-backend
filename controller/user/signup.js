import { hash } from "bcrypt";
import { userModel } from "../../Schema/user.schema.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  const body = req.body;
  const existingUser = await userModel.findOne({ email: body.email });
  if (existingUser) {
    res.status(404).json("this email already existed, use another email");
  } else {
    const saltRounds = 10;
    const hashedPassword = await hash(body.password, saltRounds);
    const createdUser = await userModel.create({
      username: body.username,
      email: body.email,
      password: hashedPassword,
      profilePicture: body.profilePicture,
      bio: body.bio,
    });
    const accessToken = jwt.sign(
      {
        data: createdUser,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json(accessToken);
  }
};
