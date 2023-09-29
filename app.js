require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const roadmapRouter = require('./router/roadmapRouter')

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( ()=> {
    app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))
})
.catch( (error) => {
    console.log(error)
})

app.use(express.json())

app.get('/api/v1', (request, response) => {
    response.status(200).json({msg : "Done"})
})

app.use('/api/v1',roadmapRouter)

// app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/api/v1`))