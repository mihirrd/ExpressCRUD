import express, { Router } from 'express'
import { v4 as uuidv4} from 'uuid'

const router = Router()

var userDB = []

// all routes starting form /users 
router.get('/', (req,res)=>{
    res.send(userDB)
})

router.post('/', (req,res)=>{

    const user = req.body 
    const userId = uuidv4()
    const userWithID = { ...user, id : userId }

    userDB.push(userWithID)

    res.send(`User with the name ${req.body.firstName} added to the db`)
} )

router.get('/:id', (req,res)=>{
    const { id } = req.params
    const founduser = userDB.find(user => user.id == id)
    res.send(founduser)
})

router.delete('/:id',(req,res)=>{
    const { id } = req.params
    userDB = userDB.filter(user => user.id !== id)
    res.send("User deleted succesfully")
})

router.patch('/:id',(req, res)=>{
    const { id } = req.params
    const { firstName, lastName} = req.body
    const user = userDB.find(user => user.id == id)

    if(firstName) {user.firstName = firstName}
    if(lastName) {user.lastName = lastName}
    res.send("User has been updated")
})

export default router