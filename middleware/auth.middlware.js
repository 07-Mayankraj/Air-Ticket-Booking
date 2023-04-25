const jwt = require("jsonwebtoken");
const auth = (req,res,next) =>{
    let token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,"secret");
    if(decoded){
        console.log(decoded);
        req.body.user_Id = decoded.user_Id; 
        next()
    }else{
        res.send("login again");
    }

}

module.exports ={auth}