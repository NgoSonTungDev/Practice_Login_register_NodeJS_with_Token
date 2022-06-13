const bcrypt = require("bcrypt"); //(mã hóa password)
const User = require("../models/user");
const jwt = require("jsonwebtoken");

let refershTokenArray = []

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

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_Acess_Key,
      { expiresIn: "20s" } //thơi gian bắt buộc đăng nhập lại
    );
  },
  generateRefeshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_refesh_Key,
      { expiresIn: "20d" }
    );
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      const valiPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!user) {
        res.status(404).json("User not found !");
      }
      if (!valiPassword) {
        res.status(404).json("Wrong password !!!");
      }

      if (user && valiPassword) {
        const accessToken = authControllers.generateAccessToken(user);
        const refreshToken = authControllers.generateRefeshToken(user);
        refershTokenArray.push(refreshToken)
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...orther } = user._doc; //khoogn cho hiene pass
        res.status(202).json({ ...orther, accessToken });
      }

    } catch (error) {
      res.status(500).json(error);
    }
  },

  requestRefreshToken: async (req, res) => {
    //take refersh token from user
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json("you not authneticated");
    if(!refershTokenArray.includes(refreshToken)){
      res.status(403).json("Refresh token is not valid")
    }    
    jwt.verify(refreshToken, process.env.JWT_refesh_Key, (err, user) => {
      if (err) {
        console.log(err);
      }
      refershTokenArray = refershTokenArray.filter((token)=>token !== refreshToken)
      const NewaccsessToken = authControllers.generateAccessToken(user);
      const newrefreshToken = authControllers.generateRefeshToken(user);
      refershTokenArray.push(newrefreshToken)
      res.cookie("refreshToken", newrefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({ accessToken: NewaccsessToken });
    });
  },
  userLogout: async(req,res)=>{
    //lear cookies when user logs out
    refershTokenArray = refershTokenArray.filter((token) => token !== req.body.token);
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully!");
  }
};

module.exports = authControllers;
