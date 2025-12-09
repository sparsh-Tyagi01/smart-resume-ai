const {Schema} = require("mongoose")
const mongoose = require("mongoose")

const jobSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: "Remote"
    },
    jobLink: {
        type: String,
        required: true
    },
    status: {
      type: String,
      enum: ["Apply","Applied", "Interview", "Rejected", "Selected"],
      default: "Apply",
    },

    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    note: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
)

const Job = mongoose.model("Job", jobSchema)

module.exports = Job