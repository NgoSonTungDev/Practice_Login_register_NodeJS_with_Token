const jwt = require("jsonwebtoken");

const middlewareController = {
  // xác thực
  verifyTokken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken,process.env.JWT_Acess_Key,(err,user)=>{
          if(err){
              res.status(403).json("Token is not valid");
          }
          req.user = user;
          next()
      })
    }else{
        res.status(401).json("you not authenticatied")
    }
  },
  verifyTokkenAndAdmin : (req, res, next)=>{
      middlewareController.verifyTokken(req,res, ()=>{
          if(req.user.id == req.params.id || req.user.admin){
              next()
          }else{
              res.status(403).json("you're not alowed to delete orther")
          }
      })
  }
};

module.exports = middlewareController
