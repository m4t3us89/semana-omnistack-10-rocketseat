require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Server ON'))
