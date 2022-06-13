const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      //unique (ngan chan khong cho trùng)
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false, //default:false (all nguoi dang ki mặt định = failse)
    },
    //timestamps:true (thời gian user dc tạo khi nào)
  },
  { timestamps: true }
);


module.exports = mongoose.model("User",userSchema)