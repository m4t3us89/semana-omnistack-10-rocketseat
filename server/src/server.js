require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const mongoose = require('mongoose')
const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use(routes)

server.listen(process.env.PORT || 3000, () =>
  console.log(`Server ON port ${process.env.PORT || 3000}`)
)
