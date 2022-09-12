const jwt = require(`jsonwebtoken`);
const authToken = (req, res, next) => {
  const token = req.header(`authorization`);
  if (!token) return res.status(400).json(`no token found`);
  try {

    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decode.id)
    next();
  } catch (err) {
    return res.status(401).json(`invalid token`);
  }
};
module.exports = { authToken };
