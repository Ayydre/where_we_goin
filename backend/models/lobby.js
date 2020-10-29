const mongoose = require('mongoose')
const Suggestion = require('./suggestion.js')
const User = require('./user.js')

const lobbySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    numSuggestions: { type: Number, max: 3},
    type: { type: String, required: true },
    suggestions: [Suggestion.schema],
    users: [User.schema],
    owner: mongoose.ObjectId
  },
  { timestamps: true }
)

const Lobby = mongoose.model('Lobby', lobbySchema)

module.exports = Lobby
