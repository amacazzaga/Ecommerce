const User = require(`../models/userModels`);
const rolAdmin = async (req, res, next) => {
    const id = req.header(`user-id`);
    if (!id) return res.status(400).json(`no user found`);
    try {
    const user = await User.findById(id)
      const isUserAdmin = user.rol[0]
      if(isUserAdmin!="admin"){
        return res.status(401).json(`no admin`)
      }
      console.log(isUserAdmin)
     console.log(id)
      next();
    } catch (err) {
      return res.status(401).json(`invalid token`);
    }
  };
  module.exports = {rolAdmin };