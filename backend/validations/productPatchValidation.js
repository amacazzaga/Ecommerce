const yup = require(`yup`);

const productPatchSchema = yup.object({
  name: yup.string(),
  category: yup.string(),
  image: yup.string(),
  price: yup.number().positive().integer(),
  amount: yup.number().positive().integer(),
  description: yup.string(),
});

module.exports = productPatchSchema;
