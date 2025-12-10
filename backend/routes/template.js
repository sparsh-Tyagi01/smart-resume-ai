const express = require("express")
const router = express.Router()
const {createTemplate} = require("../controllers/template")
const {verifyToken} = require("../middlewares/auth")

router.post("/create", verifyToken ,createTemplate)

module.exports = router