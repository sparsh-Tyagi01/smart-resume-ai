const express = require("express")
const router = express.Router()
const {verifyToken} = require("../middlewares/auth")
const {createJob, getMyJob} = require("../controllers/job")

router.post("/create", verifyToken, createJob)
router.get("/myjob", verifyToken, getMyJob)

module.exports = router