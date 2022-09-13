const User = require(`../models/userModels`);
const jwt = require(`jsonwebtoken`);
//userpost yup auth//
const userPostAuth = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    //.validate is from yup//
    await schema.validate(body);
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};
//userpatch yup auth//
const userPatchAuth = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    //.validate is from yup//
    await schema.validate(body);
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};
//user update itself auth//
const userUpdateItself = async (req, res, next) => {
  const token = req.header(`authorization`);
  if (!token) return res.status(400).json(`no token found`);
  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(verify.id);
    if (!user||!verify) return res.status(401).json(`unauthorized`)
    if(user.id===verify.id);
    next();
  } catch (err) {
    return res.status(400);
  }
};

module.exports = { userPostAuth, userPatchAuth, userUpdateItself };
