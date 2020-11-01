const mongoose = require('mongoose')
const User = require('./user.js')
const Lobby = require('./lobby.js')

const suggestionSchema = new mongoose.Schema(
  {
    description: String,
    votes: { type: Number, default: 0 },
    user: User.schema
  },
  { timestamps: true }
)

const Suggestion = mongoose.model('Suggestion', suggestionSchema)

module.exports = Suggestion
