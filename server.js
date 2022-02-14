//import express
const { request, response } = require('express')
const express= require('express')

//create express app
const app=express()

//allow users to send the data
//used to read the data from  request body
//and convert it into JS object
app.use(express.json())
 
//create the router
const routeTask= require('./routes/task')
const routeAuth= require('./routes/auth')

//add the routes
app.use('/task',routeTask)
app.use('/auth',routeAuth)

//start app
app.listen(5000, '0.0.0.0', ()=>{
    console.log('server started on port 5000')
})