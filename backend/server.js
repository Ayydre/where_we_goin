// DEPENDENCIES

// Allow Cross-Origin-Requests
const cors = require('cors')
// Server
const express = require('express')
// MongoDB ORM
const mongoose = require('mongoose')

// Dependency configurations
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// MIDDLEWARE
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors())

//use public folder for static assets
app.use(express.static('public'));

// DATABASE
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('the connection with mongod is established at', MONGODB_URI)
  }
)

// Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events
mongoose.connection.on('error', err => console.log(err.message + ' is mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// TODO: Update controllers/routes to your resources
// CONTROLLERS/ROUTES
// app.get('/ping', (req, res) => {
//   res.json({ message: "ok" })
// })

const lobbyController = require('./controllers/lobby_controller.js')
app.use('/lobby', lobbyController)

const suggestionController = require('./controllers/suggestion_controller.js')
app.use('/suggestion', suggestionController)


// LISTEN
app.listen(PORT, () => {
  console.log('Up and running on', PORT)
})
