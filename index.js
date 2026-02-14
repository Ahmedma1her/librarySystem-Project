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



app.post('/api/library/authors',async(req,res)=>{
    try {
        
        const author = await Author.create(req.body);
            res.json({
                success:true,
                message:"author added successfully",
                data:author,
            })
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}
)


app.post('/api/library/books',async(req,res)=>{
    try {
        
        
        const book=await Book.create(req.body)
        res.status(200).json({
            success: true,
            data:book,
            message:"book added"
        })
    } catch (error) {
        
        
        res.status(400).json({
            success: false,
            
            message:error.message
    })
}})



app.get('/api/library/books', async(req,res)=>{
   try {
    const books=await Book.find()
    res.status(200).json({
        success: true,
        data: books,
        message:"all books data retrieved"
    })
   } catch (error) {
    res.status(400).json({
    success: false,
            
    message:error.message
   }
)}
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))