const {User} = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")

dotenv.config()

async function userRegister(req,res) {
    const {name,email,phone,password} = req.body
    const existingEmail = await User.findOne({email})
    if(existingEmail){
        return res.status(404).json({"message": "Email already register"})
    }
    const existingPhone = await User.findOne({phone})
    if(existingPhone){
        return res.status(404).json({"message": "Phone no. already register"})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    await User.create({
        name,
        email,
        hashedPassword,
        password
    })
    jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: '1h' })
    return res.status(200).json({"message": "Register Successfull!"})
}

module.exports = {userRegister}