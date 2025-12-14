const {Job} = require("../models/job")
const { Resume } = require("../models/resume")

async function createJob(req,res) {
    const {jobTitle, company, location, jobLink, status, note, resumeId} = req.body
    const userId = req.user.id

    const resume = await Resume.findOne({_id: resumeId, userId})
    if(!resume){
        return res.status(404).json({message: "Invalid resume selected"})
    }

    const data = await Job.create({
        userId, jobTitle, company, location, jobLink, status, note, resumeId
    })

    return res.status(200).json({message: "Job created successfully", data})
}

module.exports = {createJob}