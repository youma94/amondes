const express = require('express') 
const router = express.Router()


// pour registrer les users

router.post('/',(req,res) =>  {
res.send('user send!')
})


// pour voire les amondes

router.search('/',( req, res ) =>  {
    res.send('user get!')
    })
    
 
module.exports = router