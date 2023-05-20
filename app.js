const express = require('express')
const morgan = require('morgan')

const contactRouter = require('./contactsRouter')



const app = express();
app.use(morgan('dev'))

app.use(express.urlencoded({extended: true}))// formate data
app.use(express.json())//json data



app.use('/contacts', contactRouter)



app.get('*', (req, res) => {
    res.send('<h1>Error 404 Page Not Responded</h1>')
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running On Port - ${PORT}` )
})