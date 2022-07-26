const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routerUrl = require('./routes/routes')
const app =  express();

dotenv.config()
mongoose.connect(process.env.DataBaseAccess, ()=>{
    console.log('DataBase connected...')
})

app.use(express.json())
app.use(cors())
app.use('/app', routerUrl)
app.listen(4000, ()=>{
    console.log('server is runing...');
})