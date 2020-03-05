const express = require ('express')
const app = express()
const mongoose = require('mongoose')



const db = "mongodb+srv://ymz:<password>@cluster0-otrty.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(db,(err) => { 
    if(err) throw err
    console.log('Database connected !! ..')
})

app.use('/api/users', require ('./routes/users'))
app.use('/api/auth', require ('./routes/auth'))


app.use('/api/pay_am', require ('./routes/pay_am'))



app.listen(5000, () => console.log('server is listenig on port 5000 ...'))