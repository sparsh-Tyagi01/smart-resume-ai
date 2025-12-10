const express = require("express")
const router = express.Router()
const {createTemplate, getTemplates, getTemplatesById, deleteTemplate} = require("../controllers/template")
const {verifyToken, adminOnly} = require("../middlewares/auth")

router.post("/create", verifyToken, adminOnly ,createTemplate)
router.get("/all", getTemplates)
router.get("/:id", verifyToken, getTemplatesById)
router.delete("/:id", verifyToken, adminOnly, deleteTemplate)

module.exports = router