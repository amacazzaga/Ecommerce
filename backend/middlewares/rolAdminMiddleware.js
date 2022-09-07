const User = require(`../models/userModels`);
const jwt = require(`jsonwebtoken`);
const jwt_decode = require(`jwt-decode`)

const rolAdmin = async (req, res, next) => {
  const token = req.header(`auth-token`);
  if (!token) return res.status(400).json(`no id on header found`);
  try {
    console.log(token)
    const decode =  jwt_decode(token);
    console.log(decode.id)
    const user = await User.findById(decode.id);
    console.log(user.rol)
    const isUserAdmin = user.rol[0]
    if(isUserAdmin!=`admin`){
        return res.status(401).json(`no admin`)
    }

    next();
  } catch (err) {
    return res.status(401).json(`invalid user id`);
  }
};
module.exports = { rolAdmin };
