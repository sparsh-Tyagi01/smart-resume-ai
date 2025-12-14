const express = require("express")
const router = express.Router()
const {verifyToken} = require("../middlewares/auth")
const {createJob} = require("../controllers/job")

router.post("/create", verifyToken, createJob)

module.exports = router