const mongoose = require('mongoose')
const Suggestion = require('./suggestion.js')
const User = require('./user.js')

const lobbySchema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    NumSuggestions: { type: Number, max: 3},
    Type: { type: String, required: true },
    Suggestions: [Suggestion.Schema],
    Users: [User.Schema]
  }
)

const Lobby = mongoose.model('Lobby', lobbySchema)

module.exports = Lobby
