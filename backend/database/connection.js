const mongoose = require("mongoose")

function connection(url) {
    mongoose.connect(url).then(()=> console.log("MongoDb connected")).catch((err)=> `MongoDb error: ${err}`)
}

module.exports = {connection}