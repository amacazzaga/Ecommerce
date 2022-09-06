const jwt = require(`jsonwebtoken`);
const authToken =  (req, res, next) => {
  const token = req.header(`auth-token`);
  if(!token)return res.status(400).json(`no token found`)
  try {
     jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    return res.status(401).json(`invalid token`);
  }
};
module.exports = { authToken };
