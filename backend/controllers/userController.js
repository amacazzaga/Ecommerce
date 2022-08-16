const Users = require(`../models/userModels`);
const mongoose = require(`mongoose`);

const getUsers = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
const createUser = async (req, res) => {
    const {email} = req.body; //destructuring
    try {
      const user = await Users.create({ email });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ mss: "error" });
    }
  };

module.exports = {
    getUsers,
    createUser
}