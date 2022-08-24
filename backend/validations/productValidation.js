const yup = require(`yup`);

const productSchema = yup.object({
  name: yup.string().required(),
  image: yup.string(),
  price: yup.number().positive().integer().required(),
  description: yup.string().required(),
});

module.exports = productSchema;
