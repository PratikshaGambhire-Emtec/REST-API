const express= require('express')

//get the express router
//- router: used for routing
const router=express.Router()
const db= require('../db')

//Task Related API
router.get('/all', (request, response)=> {
    const query = `select * from Task`
    const params= []
    db.execute(query, params, (error, result)=> {
        if(error){
            console.log(error)
        } else{
            console.log(result)
        }
    })
})

router.get('/:id', (request, response)=> {
    const {id}= request.params

    const query = `select * from auth where id= ${id}`
    const params=[]

    db.execute(query, params, (error, result)=>{
        if(error){
            response.send(error)
        } else {
            response.send(result )
        }
    })
})

router.post('/', (request, response)=> {
    const {title, contents, userId}=request.body
    const query = `insert into Task (title, contents, userId) values (?, ?, ?)`
    const params= [title, contents, userId]
    db.execute(query, params, (error, result)=> {
        if(error){
            console.log(error)
        } else{
            console.log(result)
        }
        response.send('done')
    })
})

router.delete('/:id', (request, response)=> {
    const {id} =  request.params
    const query = `delete from task where id = ?`
    const params= [id]
    
    db.execute(query, params, (error, result)=> {
        if(error){
            console.log(error)
        } else{
            console.log(result)
        }
        response.send('done')
    })

})

router.put('/:id/status', (request, response)=> {
    const {userId, title, contents }= request.body

    const query= `update task set title=?, contents= ? where id = ?`
    const params= [title, contents, userId]

    db.execute(query, params, (error, result)=> {
        if(error){
            console.log(error)
        } else{
            console.log(result)
        }
        response.send('done')   
    })
 })

//export router and use it in server.js
module.exports= router
