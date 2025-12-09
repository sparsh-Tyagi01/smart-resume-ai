const express = require("express")
const {connection} = require("./database/connection")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")

dotenv.config()
const app = express()

connection(process.env.MONGO_URI)

app.use(bodyparser.json())

app.listen(process.env.PORT, ()=>console.log(`Server started at PORT: ${process.env.PORT}`))