require("dotenv").config()
const  express = require('express')
const app = express()
const port = process.env.PORT

const mongoose =require("mongoose")
const Author=require("./models/Authors")
const Book=require("./models/Books")

app.use(express.json())

async function db_connect() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected");
        
    } catch (error) {
        console.log(`database error${error}`);
        
    }
    
}
db_connect()





const authrouter=require("./router/authorRoute")
app.use(authrouter)
const bookrouter=require("./router/booksRoute")
app.use(bookrouter) 




app.listen(port, () => console.log(`Example app listening on port ${port}!`))