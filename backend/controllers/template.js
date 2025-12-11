const {cloudinary} = require("../config/cloudinary")
const {Template} = require("../models/template")

async function createTemplate(req,res) {

    if (!req.files.image || !req.files.html) {
      return res.status(400).json({ error: "Image and HTML file are required" });
    }

    const uploadedImage = await cloudinary.uploader.upload(req.files.image[0].path, {
        resource_type: "image",
        folder: "templates"
    })
    const uploadedHtml = await cloudinary.uploader.upload(req.files.html[0].path, {
        resource_type: "raw",
        folder: "htmlTemplates"
    })

    const data = await Template.create({
        name: req.body.name,
        previewUrl: uploadedImage.secure_url,
        htmlUrl: uploadedHtml.secure_url,
        fields: req.body.fields ? req.body.fields.split(",") : []
    })

    return res.status(200).json({message: "Created Successfuly", data})
}

async function getTemplates(req,res) {
    const data = await Template.find().sort({ccreatedAt: -1})
    if(!data){
        return res.status(404).json({message: "Template not found"})
    }
    return res.status(200).json({data})
}

async function getTemplatesById(req,res) {
    const data = await Template.findOne(req.params.id)
    if(!data){
        return res.status(404).json({message: "Template not found"})
    }
    return res.status(200).json({data})
}

async function deleteTemplate(req,res) {
    const data = await Template.findByIdAndDelete(req.params.id)
    if(!data){
        return res.status(404).json({message: "Template not found"})
    }
    return res.status(200).json({message: "Deleted Successfully"})
}

async function updateTemplate(req,res) {
    const {name, fields} = req.body
    let payload = {name, fields: fields? fields.split(","):[]}
    if(req.files.image){
        const uploadedImage = await cloudinary.uploader.upload(req.files.image[0].path, {
            resource_type: "image",
            folder: "templates"
        })
        payload.previewUrl = uploadedImage.secure_url
    }
    if(req.files.html){
        const uploadedHtml = await cloudinary.uploader.upload(req.files.html[0].path, {
            resource_type: "raw",
            folder: "htmlTemplates"
        })
        payload.htmlUrl = uploadedHtml.secure_url
    }

    const data = await Template.findByIdAndUpdate(req.params.id, payload, {new: true})

    if(!data){
        return res.status(404).json({message: "Template not found"})
    }
    return res.status(200).json({message: "Updated Successfully"})
}

module.exports = {createTemplate, getTemplates, getTemplatesById, deleteTemplate, updateTemplate}