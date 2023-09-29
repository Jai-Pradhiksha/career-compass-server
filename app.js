const express = require('express')
const app = express()
const PORT = 3500

app.get('/api/v1', (request, response) => {
    response.status(200).json({msg : "Done"})
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/api/v1`))