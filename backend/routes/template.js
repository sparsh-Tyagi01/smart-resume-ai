const express = require("express")
const router = express.Router()
const {createTemplate, getTemplates} = require("../controllers/template")
const {verifyToken, adminOnly} = require("../middlewares/auth")

router.post("/create", verifyToken, adminOnly ,createTemplate)
router.get("/all", getTemplates)

module.exports = router