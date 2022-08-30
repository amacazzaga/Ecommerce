const userPostAuth = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
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
    await schema.validate(body);
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { userPostAuth, userPatchAuth };
