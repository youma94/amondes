const express = require ('express')
const router = express.Router()

// get amendes

router.get('/',( req, res ) =>  {
    res.send('get amendes!')
})

router.get('/',( req,res ) => {
    res.send('send amonde ... !')
})


module.exports = router