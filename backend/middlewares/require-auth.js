const jwt = require("jsonwebtoken");
const User = require("../src/users/user.model");


module.exports = async (req, res, next) => {
  try {
      let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        throw Error("Not authenticated");
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET);


      if (!payload.id || payload.id === "") {
        throw new Error("Not authenticated")
      }
      const user = await User.findOne({user_id: payload.id})
      req.user = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        id: user.user_id,
        _id: user._id,
        active:  user.active,
        createdAt:  user.createdAt,
        updatedAt:  user.updatedAt,
        referralCode:  user.referralCode
      };
    next();
  } catch (error) {
    throw Error("Not authenticated");
  }
};