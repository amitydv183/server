const express= require('express')

const app=express()

const web = require('./routes/web')
const connectDB = require('./db/connectDB')
const fileupload = require('express-fileupload')
const cors=require("cors");
const cookieParser = require('cookie-parser')
require('dotenv').config();


app.use(cookieParser())


app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
);

// image upload
app.use(fileupload({
    useTempFiles: true,

}))


connectDB()
app.use(express.json()) // to parse JSON bodies


// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// }) no longer needed

app.use('/api', web)
app.listen(process.env.PORT, console.log('server start localhost :4000'))

