const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

function verifyToken(req,res) {
    const token = req.headers("authorization")
    if(!token) return res.status(403).send("token required")
    try {
        const decode = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).send("invalid token")
    }
}

function adminOnly(req,res) {
    if(!req.user || req.user.role != "admin"){
        return res.status(400).json({message: "Admin access required"})
    }
    next()
}

module.exports = {verifyToken, adminOnly}