const User = require(`../models/userModels`);
const jwt = require(`jsonwebtoken`);

const rolAdmin = async (req, res, next) => {
  const token = req.header(`authorization`);
  if (!token) return res.status(400).json(`no id on header found`);
  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(verify.id);
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
