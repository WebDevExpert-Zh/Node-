const express = require('express')
const router=express.Router()
router.get('/', (req, res) => {
    console.log(req);
    
    res.send('user page')
})
router.get('/login', (req, res) => {    
    res.send('login page')
})
module.exports=router