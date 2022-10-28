var express = require("express");
var mongoose = require("mongoose");
var pathname = require("path")

var indexRouter = require("./routers/index.js");
var userRouter = require("./routers/users.js");

mongoose.connect("mongodb://localhost:27017/userDB", {useUnifiedTopology: true, useNewUrlParser : true}, (err)=>{
  console.log(err? err : `DB Connected`)
})

var app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname+"/public"))

app.set("view engine" , "ejs");
app.set("views", pathname.join(__dirname, "views"))

app.use("/", indexRouter);
app.use("/users", userRouter)

app.use((err, req, res, next)=>{
  res.status(404).send("404: Page not found")
})

app.listen(5000, "localhost", ()=>{
  console.log(`server start at 5k`)
})