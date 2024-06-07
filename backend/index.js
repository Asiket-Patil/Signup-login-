const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const Employeee = require("./models/signup.model")



app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Signup&login");

app.post("/login",(req,res)=>{
    const {email, password}=req.body;
    Employeee.findOne({email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("no record existed")
        }
    })
})

app.post('/register', (req,res)=>{
    Employeee.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>console.log(err))
   

})

app.listen(3000, ()=>{
    console.log("server is running on the port 3000");
})