const User = require(`../models/userModels`);
const mongoose = require(`mongoose`);


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
  const { email, password } = req.body; //destructuring
  try {
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
//get a single user//
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json(`not a valid id`);
  }
  const user = await User.findById(id);
  if (!user) {
   return res.status(400).json(`no such user`);
  }
  res.status(200).json(user);
};
//delete user///
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json(`not a valid id`);
  }
  const user = await User.findByIdAndDelete(id);
  if (!user) {
   return res.status(400).json(`no such user`);
  }
  res.status(200).json(user);
};
//update user///
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json(`not a valid id`);
  }
  const user = await User.findOneAndUpdate({id},{...req.body});
  if (!user) {
   return res.status(400).json(`no such user`);
  }
  res.status(200).json(user);
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser
};
