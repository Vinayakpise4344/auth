const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/Authrouter.js')
const Productrouter = require('./Routes/Productrouter.js')
require('dotenv').config();
require('./Models/db.js')

//n12kwZ1qo8jR7DVa


// Middleware
app.use(cors())
app.use(bodyparser.json())
app.use('/auth',AuthRouter)
app.use('/Product',Productrouter)

const PORT =process.env.PORT;

app.get("/",(req,res)=>{
    res.send("kwqjcnw")
})

app.listen(PORT,()=>{
    console.log(`Server side is running ${PORT}`)
})