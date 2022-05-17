const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/auth")

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECT, (error) => {
  if (error) {
    console.log("Error :" + error);
  } else {
    console.log("Connect successfully with MoongoDB ... ");
  }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("server is runninr .... ");
});

//Routes
app.use("/api/auth",authRoute)

//AUTHENTICATION (so sáng user & pass vs database)


//AUTHORIZATION (phân quyền)