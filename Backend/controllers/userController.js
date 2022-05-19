const User = require("../models/user");

const userController = {
  getAllUSer: async (req, res) => {
    try {
      const user = await User.find();
      res.status(202).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
    //   const iduser = await User.findByIdAndDelete(req.params.id);

      const iduser = await User.findById(req.params.id);
      res.status(202).json("delete success fully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
