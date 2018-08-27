const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/recipes", (req,res)=>{
    res.render("recipes")
})
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/howitsmade", (req,res)=>{
    res.render("howitsmade")
})

app.listen(3000, ()=>{
    console.log("i can hear you")
})