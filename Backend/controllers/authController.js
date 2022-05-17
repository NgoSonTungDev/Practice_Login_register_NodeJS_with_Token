const bcrypt = require("bcrypt"); //(mã hóa password)
const User = require("../models/user");
const authControllers = {
  //register
  register: async (req, res) => {
    try {
      // mã hóa mât khâu
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      ///tạo user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });
      //save
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("User not found !");
      }
      const valiPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!valiPassword) {
        res.status(404).json("Wrong password !!!");
      }
      if (user && valiPassword) {
        res.status(202).json(user);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.status(202).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authControllers;
