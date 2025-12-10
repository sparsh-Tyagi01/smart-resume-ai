const express = require("express")
const router = express.Router()
const {createTemplate} = require("../controllers/template")
const {verifyToken, adminOnly} = require("../middlewares/auth")

router.post("/create", verifyToken, adminOnly ,createTemplate)

module.exports = router