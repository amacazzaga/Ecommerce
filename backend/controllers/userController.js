const User = require(`../models/userModels`);
const mongoose = require(`mongoose`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

//get all users//
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//create new user//
const createUser = async (req, res) => {
  const { name, lastName, age, email, password, rol } = req.body; //destructuring
  try {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      console.log(emailExist)
      return res.status(400).json(`this e mail already exist`);
    }
    const hashedPassword = await bcrypt.hash(password, 8); // hashing password
    //create an email already exist//
   
    const user = await User.create({
      name,
      lastName,
      age,
      email,
      password: hashedPassword,
      rol,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//get a single user//
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json(`no such user`);
  }
  res.status(200).json(user);
};
//loggin user//
const logginUser = async (req, res) => {
  const { email, password } = req.body;
  const isValidUserEmail = await User.findOne({ email });
  if (!isValidUserEmail) {
    return res.status(404).json(`no such email`);
  }
  const isValidUserPassword = await bcrypt.compare(
    password,
    isValidUserEmail.password
  );

  if (!isValidUserPassword) {
    return res.status(404).json(`invalid password`);
  }

  const token = jwt.sign({ id: isValidUserEmail.id }, process.env.TOKEN_SECRET);
  res.header(`auth-token`, token).send(token);
};
//delete user///
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json(`no such user`);
  }
  res.status(200).json(user);
};
//update user///
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`not a valid id`);
  }
  const user = await User.findOneAndUpdate({ id }, req.body);
  if (!user) {
    return res.status(404).json(`no such user`);
  }
  res.status(200).json(user);
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  logginUser,
};
