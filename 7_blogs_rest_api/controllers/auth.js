const { User } = require("../models");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");
const generateCode = require("../utils/generateCode");
const hashPassword = require("../utils/hashPassword");
const sendEmail = require("../utils/sendEmail");

const signup = async (req, res, next) => {
  
  try {
    // res.code = 400;
    // throw new Error("test error"); // test errorHandler middelware


    const { name, email, password, role } = req.body;

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      res.code = 400;
      throw new Error("Email already exist");
    }

    // if(!name) {
    //   res.code = 400;
    //   throw new Error("Name is required");
    // }

    // if(!email) {
    //   res.code = 400;
    //   throw new Error("Email is required");
    // }

    // if(!password) {
    //   res.code = 400;
    //   throw new Error("Password is required");
    // }

    // if(password.length < 6) {
    //   res.code = 400;
    //   throw new Error("Password should be 6 char long");
    // }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({
      code: 201,
      status: true,
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.code = 401;
      throw new Error("Invalid credentials");
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      res.code = 401;
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user);

    res.status(200).json({
      code: 200,
      status: true,
      message: "User signin successful",
      data: { token },
    });
  } catch (error) {
    next(error);
  }
};

const verifyCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    if (user.isVerified) {
      res.code = 400;
      throw new Error("User already verified");
    }

    const code = generateCode(6);
    user.verificationCode = code;
    await user.save();

    await sendEmail({
      emailTo: "hb18096@gmail.com",
      subject: "Email verification code",
      code,
      content: "verify your account",
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "User verification code sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    if (user.verificationCode !== code) {
      res.code = 400;
      throw new Error("Invalid code");
    }

    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    res
      .status(200)
      .json({ code: 200, status: true, message: "User verified success" });
  } catch (error) {
    next(error);
  }
};

const forgotPasswordCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }
    const code = generateCode(6);
    user.forgotPasswordCode = code;
    await user.save();

    await sendEmail({
      emailTo: "hb18096@gmail.com" ?? user.email,
      subject: "Forgot password code",
      code,
      content: "change your password",
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Forgot password code sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

const recoverPassword = async (req, res, next) => {
  try {
    const { email, code, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.code = 400;
      throw new Error("User not found");
    }

    if (user.forgotPasswordCode !== code) {
      res.code = 400;
      throw new Error("Invalid code");
    }

    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.forgotPasswordCode = null;
    await user.save();
    res.status(200).json({
      code: 200,
      status: true,
      message: "Password recovred successfully",
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { _id } = req.user;

    const user = await User.findById(_id);
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }
    const match = await comparePassword(oldPassword, user.password);
    console.log(match);
    if (!match) {
      res.code = 400;
      throw new Error("Old password doesn't match");
    }

    if (oldPassword === newPassword) {
      res.code = 400;
      throw new Error("You are providing old password");
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      code: 200,
      status: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { name, email } = req.body;

    const user = await User.findById(_id);
    res.send("hello world");
    if (!user) {
      res.code = 404;
      throw new Error("User not found");
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;

    if (email) {
      user.isVerified = false;
    }

    await user.save();
    res.status(200).json({
      code: 200,
      status: true,
      message: "User profile updated successfully",
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

const home = async (req, res, next) => {
  res.status(200).send("hello world");
};

module.exports = {
  signup,
  signin,
  verifyCode,
  verifyUser,
  forgotPasswordCode,
  recoverPassword,
  changePassword,
  updateProfile,
  home,
};
