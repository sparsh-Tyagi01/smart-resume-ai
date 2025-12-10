const express = require("express")
const router = express.Router()
const {uploadResume} = require("../controllers/resume")
const {verifyToken} = require("../middlewares/auth")
const {upload} = require("../middlewares/multer")

router.post("/upload", verifyToken, upload.single("resume"), uploadResume)

module.exports = router