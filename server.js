const express = require('express')
const apiRoutes = require('./src/routes/api')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use('/api', apiRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
