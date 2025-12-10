const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const templateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    previewUrl: {
        type: String,
        required: true
    },
    htmlUrl: {
        type: String,
        required: true
    },
    fields: {
        type: [String],
        default: []
    }
}, {timestamps: true})

const Template = mongoose.model("Template", templateSchema)

module.exports = {Template}