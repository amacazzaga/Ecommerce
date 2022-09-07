const User = require(`../models/userModels`);
const rolAdmin = async (req, res, next) => {
  const id = req.header(`user-id`);
  if (!id) return res.status(400).json(`no id on header found`);
  try {
    const user = await User.findById(id);
    const isUserAdmin = user.rol[0];
    if (isUserAdmin != "admin") {
      return res.status(401).json(`youre not an admin`);
    }
    console.log(isUserAdmin);
    console.log(id);
    next();
  } catch (err) {
    return res.status(401).json(`invalid user id`);
  }
};
module.exports = { rolAdmin };
