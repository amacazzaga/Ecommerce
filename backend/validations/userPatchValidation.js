const yup = require(`yup`);

const userPatchSchema = yup.object({
  name: yup.string().min(2).max(35),
  lastName: yup.string().min(2).max(30),
  age: yup.boolean(),
  email: yup.string().email(),
  password: yup.string().min(4).max(18)
});

module.exports = userPatchSchema;