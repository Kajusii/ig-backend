import { userModel } from "../../Schema/user.schema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({
    email: body.email,
  });
  if (user) {
    const existing = await compare(body.password, user.password);
    if (existing) {
      const accessToken = jwt.sign(
        {
          data: user,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(accessToken);
    } else res.status(404).json("wrong password");
  } else res.status(404).json("please register");
};
