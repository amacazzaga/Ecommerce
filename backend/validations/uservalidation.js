const yup = require(`yup`);

const userSchema = yup.object({
  name: yup.string().min(4).max(30).required(),
  lastName: yup.string().min(4).max(30).required(),
  age: yup.number().positive().integer().min(18).max(99).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(18).required(),
});

module.exports = userSchema;
