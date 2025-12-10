const express = require("express")
const router = express.Router()
const {uploadResume, getMyResume} = require("../controllers/resume")
const {verifyToken} = require("../middlewares/auth")
const {upload} = require("../middlewares/multer")

router.post("/upload", verifyToken, upload.single("resume"), uploadResume)
router.get("/myResume", verifyToken, getMyResume)

module.exports = router