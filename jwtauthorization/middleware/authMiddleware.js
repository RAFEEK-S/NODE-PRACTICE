const jwt = require("jsonwebtoken");

const authMiddleware =  (req, res,next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "No token provided, Authorization Denied" });
  }
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded
    next()
  }catch(error){
    res.status(500).json({error:"Invalid token"})
  }
};

module.exports = authMiddleware;
