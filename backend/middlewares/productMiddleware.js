//product post middleware//
const productPostAuth = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};
//product patch middleware//
const productPatchAuth = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { productPostAuth, productPatchAuth };
