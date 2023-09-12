const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse")

module.exports.register = async (req, res, next) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PW_SEC
    ).toString(),
  });
  const email = newUser.email
  const emailExit = await User.findOne({email});
  if (emailExit) {
    return next(new ErrorResponse("E-mail already registred", 400));
}
  try {
    const saveUser = await newUser.save();
    res.status(201).json({
      success: true,
      saveUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Invalid Credentials");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PW_SEC
    );
    const orPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    orPassword !== req.body.password &&
      res.status(401).json("Invalid Credentials");
    const { password, ...other } = user._doc;

    const accessToken = JWT.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: 60 * 60 }
    );

    res.status(200).json({
      success: true,
      ...other,
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};
