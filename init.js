const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => { console.log("Connection Successfull....."); }).catch((err) => { console.log("Error in connecting DB"); })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChat = [
    {
        from: "sachin",
        to: "yaseen",
        msg: "Bhai youtube...??",
        created_at: new Date(),
    },
    {
        from: "ibrahim",
        to: "rehan",
        msg: "Bhai thul thula bola",
        created_at: new Date(),
    },
    {
        from: "yaseen",
        to: "rehan",
        msg: "Haa bhai mai bhi suna thul thula bola teko",
        created_at: new Date(),
    },
    {
        from: "sachin",
        to: "ibrahim",
        msg: "kya re kali linux",
        created_at: new Date(),
    },
    {
        from: "yaseen",
        to: "ibrahim",
        msg: "Tu bsdk durr reh shweta se",
        created_at: new Date(),
    },
    {
        from: "rehan",
        to: "ibrahim",
        msg: "Ek hee paratha duunga",
        created_at: new Date(),
    },
    {
        from: "ibrahim",
        to: "rehan",
        msg: "Jaa bhai tu kha le rhnde meko nhi chaiye",
        created_at: new Date(),
    },
    {
        from: "rehan",
        to: "sachin",
        msg: "Dekha iska naatak",
        created_at: new Date(),
    },
    {
        from: "sachin",
        to: "rehan",
        msg: "Haa bhai dekha lekin kya hee kr skta hai",
        created_at: new Date(),
    },
    {
        from: "yaseen",
        to: "rehan",
        msg: "Chodd re bhai hamesha ka hai",
        created_at: new Date(),
    },
]

//Chat.insertMany(allChat)