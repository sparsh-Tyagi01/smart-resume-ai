const {Resume} = require("../models/resume")
const {cloudinary} = require("../config/cloudinary")

async function uploadResume(req,res) {
    const userId = req.user.id

    if(!userId){
        return res.status(400).json({message: "userId required"})
    }

    if(!req.file){
        return res.status(400).json({message: "No resume file uploaded"})
    }

    const uploaded = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw",
        folder: "resumes"
    })

    const {name, email, phone, github, linkedin, skills, experience, education} = req.body

    const data = await Resume.create({
        userId,
        name,
        email,
        phone,
        github,
        linkedin,
        skills : skills? JSON.parse(skills): [],
        experience: experience? JSON.parse(experience): [],
        education: education? JSON.parse(education): [],
        resumeUrl: uploaded.secure_url
    })

    return res.status(200).json({message: "Resume uploaded successfully", data})
}

async function getMyResume(req,res) {
    const userId = req.user.id
    if(!userId){
        return res.status(400).json({message: "userId required"})
    }

    const data = await Resume.find({userId})

    if(!data){
        return res.status(400).json({message: "Upload resume"})
    }

    return res.status(200).json({data})
}

async function updateResume(req,res) {
    const userId = req.user.id
    if(!userId){
        return res.status(400).json({message: "userId required"})
    }
    const data = await Resume({userId})

    if(!data){
        return res.status(404).json({message: "Resume not found"})
    }

    const {name, email, phone, github, linkedin, skills, experience, education} = req.body

    data.name = name || data.name
    data.email = email || data.email
    data.phone = phone || data.phone
    data.github = github || data.github
    data.linkedin = linkedin || data.linkedin

    if(skills) data.skills = JSON.parse(skills);
    if(experience) data.experience = JSON.parse(experience);
    if(education) data.education = JSON.parse(education);

    if(req.file){
        const uploaded = await cloudinary.uploader.upload(req.file.path, {
            folder: "resumes",
            resource_type: "raw"
        })

        data.resumeUrl = uploaded.secure_url
    }

    const updated = await data.save()

    return res.status(200).json({message: "Updated successfully", updated})
}

async function deleteResume(req,res) {
    const data = await Resume.findByIdAndDelete(req.params.id)
    if(!data){
        return res.status(404).json({message: "Resume not found"})
    }
    return res.status(200).json({message: "Deleted Successfully"})
}

module.exports = {uploadResume, getMyResume, updateResume, deleteResume}