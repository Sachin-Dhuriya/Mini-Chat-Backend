const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,
    },
    to : {
        type : String,
        required : true,
    },
    msg : {
        type : String,
        maxLength : [50 , "Your Message has crossed the max limit of character"],
    },
    created_at : {
        type : Date,
        required : true,
    }
})

const Chat = new mongoose.model("Chat",chatSchema);

module.exports = Chat;









