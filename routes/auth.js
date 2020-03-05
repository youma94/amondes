const express = require ('express')
const router = express.Router()

// get loget in user
router.get('/',( req, res ) =>  {
    res.send('get user loget in!')
})

// login the user
router.get('/',( req, res ) =>  {
    res.send('login the user !')
})


module.exports = router