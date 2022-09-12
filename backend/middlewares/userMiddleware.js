const User = require(`../models/userModels`);
const jwt_decode = require(`jwt-decode`);
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
  const { id } = req.params;
  if (!token) return res.status(400).json(`no token found`);
  try {
    const decode = jwt_decode(token);
    const user = await User.findById(id);
    console.log(decode.id);
    console.log(user.id);
    if(decode.id!=user.id) return res.status(401).json(`unauthorized`)
    next();
  } catch (err) {
    return res.status(400);
  }
};

module.exports = { userPostAuth, userPatchAuth,userUpdateItself };
