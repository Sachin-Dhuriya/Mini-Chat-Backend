// Requiring Express--------------------------------------------------
const express = require("express")
const app = express();
const path = require("path");
const { json } = require("stream/consumers");
const port = 8080;

//EJS----------------------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/CSS")))
app.use(express.static(path.join(__dirname, "public/JS")))

// Data Parsing---------------------------------------------------------

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//-Method-Override---------------------------------------------------------
var methodOverride = require('method-override')
app.use(methodOverride('_method'))



//mongoose------------------------------------------------------------
const mongoose = require("mongoose");
main().then(() => { console.log("Connection Successfull....."); }).catch((err) => { console.log("Error in connecting DB"); })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

const Chat = require("./models/chat.js");

//-------------------------APIs Route-------------------------------------------------------
app.listen(port, () => {
    console.log(`App is listening on port ${port}.......`);
})

app.get("/", (req, res) => {
    res.render("homepage")
})

//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("chats", { chats })
})

//new chat route

app.get("/chats/new", (req, res) => {
    res.render("new")
})

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let chat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    chat.save().then(() => { console.log("Chat Sent......"); }).catch((err) => { console.log("Facing Error"); })
    res.redirect("/chats")
})

//Update Route

app.get("/chats/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let user = await Chat.findById(id);
    res.render("edit",{user})
})

app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let newMsg = req.body.msg
    await Chat.findByIdAndUpdate({_id : id},{msg : newMsg}).then(()=>{console.log("Message Updated");}).catch(()=>{console.log("Error Occured");})
    res.redirect("/chats");
})

//Delete Route-------------------------------------------------------

app.delete("/chats/:id",(req,res)=>{
    let {id} = req.params;
    Chat.findByIdAndDelete({_id : id}).then(()=>{console.log("Deleted");}).catch(()=>{console.log("Error Occured while deleting from db");})
    res.redirect("/chats")
})


