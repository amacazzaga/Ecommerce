const yup = require(`yup`);

const productPostSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  image: yup.string(),
  price: yup.number().positive().integer().required(),
  description: yup.string().required(),

});

module.exports = productPostSchema;
