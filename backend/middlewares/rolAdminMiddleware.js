const User = require(`../models/userModels`);
const jwt = require(`jsonwebtoken`);
const jwt_decode = require(`jwt-decode`);

const rolAdmin = async (req, res, next) => {
  const token = req.header(`authorization`);
  if (!token) return res.status(400).json(`no id on header found`);
  try {
    const decode = jwt_decode(token);
    const user = await User.findById(decode.id);
    const isUserAdmin = user.rol.some((r) => r == "admin");
    if (!isUserAdmin) {
      return res.status(401).json(`no admin`);
    }
    next();
  } catch (err) {
    return res.status(401).json(`invalid user id`);
  }
};
module.exports = { rolAdmin };
