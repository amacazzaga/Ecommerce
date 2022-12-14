const yup = require(`yup`);

const userPostSchema = yup.object().shape({
  name: yup.string().min(2).max(35).required(),
  lastName: yup.string().min(2).max(30).required(),
  age: yup.boolean().isTrue().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(18).required(),
  rol : yup.array().of(yup.string()).required()
});

module.exports = userPostSchema;
