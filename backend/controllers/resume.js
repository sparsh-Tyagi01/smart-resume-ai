const {Resume} = require("../models/resume")
const {cloudinary} = require("../config/cloudinary")
const { upload } = require("../middlewares/multer")

async function uploadResume(req,res) {
    const userId = req.user.id

    if(!req.file){
        return res.status(400).json({"message": "No resume file uploaded"})
    }

    const uploaded = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw",
        folder: "resumes"
    })

    const {name, email, phone, github, linkdin, skills, experience, education} = req.body

    const data = await Resume.create({
        userId,
        name,
        email,
        phone,
        github,
        linkdin,
        skills,
        experience,
        education,
        resumeUrl: uploaded.secure_url
    })

    return res.status(200).json({"message": "Resume uploaded successfully", data})
}

module.exports = {uploadResume}