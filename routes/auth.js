const express=require('express')
const router= express.Router()
const db= require('../db')
//const { patch } = require('./task')

//import crypto-js for encrypting password
const cryptoJs= require('crypto-js')

//Authentication related API
router.post('/signup', (request, response)=> {
    //get the body parameters
  //  console.log(request.body)

  //extracting the keys from request body
  //all the matching keys are extracted as variables
  //firstName, lastName, email and password are the variable
  const { firstName, lastName, email, password}= request.body
  const encyptedPassword= '' +cryptoJs.MD5(password)

  const query = `insert into auth (firstName, lastName, email, password) values(?, ?, ?, ?)`
  const params= [firstName, lastName, email, encyptedPassword ]
  db.execute(query, params, (error, result)=> {
      if(error){
          console.log(error)
      } else{
          console.log(result)
      }
      response.send('done')
  })

})

router.post('/signin', (request, response)=> {
    const{email, password}= request.body

    const encryptedPassword= '' +cryptoJs.MD5(password)
    console.log(`user:` +email)
    console.log(`password:` +encryptedPassword)
    
    const query=`select * from auth where email=? and password=?`
    const params=[email, encryptedPassword]
    
    db.execute(query, params, (error, auths)=> {
        if(error){
            console.log(error)
            response.send('error')
        } else{
            console.log(auths)
            if(auths.length==0){
                response.send('user does not exists')
            }else{
                response.send(auths[0])
            }
        }
       
    })
})

module.exports=router