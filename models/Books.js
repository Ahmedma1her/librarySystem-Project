const mongoose =require("mongoose")
const Author = require("./Authors")
const booksschema=new mongoose.Schema({
    title:String,
    author: {type : mongoose.Schema.Types.ObjectId,ref: Author}
})

const Book= mongoose.model("Book", booksschema)
module.exports=Book