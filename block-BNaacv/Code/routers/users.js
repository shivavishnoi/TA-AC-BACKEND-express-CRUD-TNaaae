var express = require("express")
var mongoose = require("mongoose")
var router = express.Router();
var pathname = require("path")
var User = require(pathname.join(__dirname, '../', "models", "userSchema.js"))
router.post("/", (req, res, next)=>{
  User.create(req.body, (err, student)=>{
    if(err) next(err);
    res.send(`User ${student.name} has been created`)
  })
})
router.get("/:id", (req, res, next)=>{
  let id = req.params.id
  User.findById(id, (err, user)=>{
   if(err) next(err)
   res.send(user.name+" email is "+user.email)
  })
})

router.delete("/:id", (req, res, next)=>{
  let id = req.params.id
  User.findByIdAndDelete(id, {new:true}, (err, user)=>{
    if(err) next(err)
    res.send(`${user.name} has been deleted`)
  })
})
router.put("/:id", (req, res, next)=>{
  let id = req.params.id
  User.findByIdAndUpdate(id, req.body,{new:true}, (err, user)=>{
    if(err) next(err)
    res.send(`User details has been updated`)
  })
})
module.exports = router;