const yup = require(`yup`);

const productPatchSchema = yup.object({
  name: yup.string(),
  category: yup.string(),
  imageName: yup.array().max(5),
  price: yup.number().positive().integer(),
  amount: yup.number().positive().integer(),
  description: yup.string(),
});

module.exports = productPatchSchema;
