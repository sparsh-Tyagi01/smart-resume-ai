const express = require("express")
const router = express.Router()
const {uploadResume, getMyResume, updateResume, deleteResume} = require("../controllers/resume")
const {verifyToken} = require("../middlewares/auth")
const {upload} = require("../middlewares/multer")

router.post("/upload", verifyToken, upload.single("resume"), uploadResume)
router.get("/myResume", verifyToken, getMyResume)
router.put("/update", verifyToken, upload.single("resume"), updateResume)
router.delete("/:id", verifyToken, deleteResume)

module.exports = router