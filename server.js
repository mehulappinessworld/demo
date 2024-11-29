const express = require('express')
require('dotenv').config()
const apiRoutes = require('./src/routes/api')
const app = express()
app.use(express.json())
app.use('/api', apiRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
