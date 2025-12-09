const {Schema} = require("mongoose")
const mongoose = require("mongoose")

const resumeSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    skills: {
        type: [String],
        default: [],
        required: true
    },
    experience: [
        {
            company: String,
            role: String,
            duration: String,
            description: String
        }
    ],
    education: [
        {
            degree: String,
            institution: String,
            year: String
        }
    ],
    resumeUrl: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume