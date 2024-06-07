const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name : String,
    email:String,
    password : String
})

const Employeee = mongoose.model("Employeee",employeeSchema)

module.exports = Employeee;