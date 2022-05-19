const bcrypt = require("bcrypt"); //(mã hóa password)
const User = require("../models/user");
const jwt = require("jsonwebtoken");

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
        const accessToken = jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_Acess_Key,
          { expiresIn: "10d" } //thơi gian bắt buộc đăng nhập lại
        );
        const {password,...orther} = user._doc //khoogn cho hiene pass
        res.status(202).json({...orther,accessToken});
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authControllers;
