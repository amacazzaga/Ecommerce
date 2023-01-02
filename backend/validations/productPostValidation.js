const yup = require(`yup`);

const productPostSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().integer().required(),
  description: yup.string().required(),
});

module.exports = productPostSchema;
