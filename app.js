const express = require('express')
const app = express();







app.get('/', (req, res) => {
    res.send("I am Root Route or URL")
})

app.get('*', (req, res) => {
    res.send('<h1>Error 404 Page Not Responded</h1>')
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running On Port - ${PORT}` )
})