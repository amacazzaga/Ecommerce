const yup = require(`yup`);

const productSchema = yup.object({
  name: yup.string().min(1).max().required(),
  image: yup.string().min(2).max(),
  price: yup.number().positive().integer().min(1).max().required(),
  description: yup.string().required(),
 
});

module.exports = productSchema;