const User = require(`../models/userModels`);
const mongoose = require(`mongoose`);

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
const createUser = async (req, res) => {
  const { email, password } = req.body; //destructuring
  try {
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
};

module.exports = {
  getUsers,
  createUser,
  getUser,
};
