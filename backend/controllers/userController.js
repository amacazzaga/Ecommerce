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
      return res.status(404).json(`this e-mail already exist`);
    }
    const hashedPassword = await bcrypt.hash(password, 8); // hashing password

    const user = await User.create({
      name,
      lastName,
      age,
      email,
      password: hashedPassword,
      rol,
    });
    res.status(201).json(user);
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
//login user//
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json(`no such email`);
  }
  //comparing the req.body pass with the one on db//
  const isValidUserPassword = await bcrypt.compare(password, user.password);
  if (!isValidUserPassword) {
    return res.status(401).json(`invalid password`);
  }
  //create a jwt when logg in
  const isUserAdmin = user.rol.some((r) => r == "admin");
  const token = jwt.sign(
    { id: user.id, isUserAdmin },
    process.env.TOKEN_SECRET
  );
  return res
    .status(200)
    .header(`Authorization`, token)
    .send({ token: token, isUserAdmin: isUserAdmin });
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
  const { name, lastName, password, rol } = req.body;

  const props = [
    { value: name, key: "name" },
    { value: lastName, key: "lastName" },
    { value: password, key: "password" },
    { value: rol, key: "rol" },
  ];

  const result = props.reduce((res, current) => {
    if (current.value) {
      const transformed =
        current.key == "password"
          ? bcrypt.hashSync(current.value, 8)
          : current.value;

      return { ...res, [current.key]: transformed };
    } else return res;
  }, {});

  const user = await User.findByIdAndUpdate(id, result);
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
  loginUser,
};
