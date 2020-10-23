const mongoose = require('mongoose')
const User = require('./user.js')

const suggestionSchema = new mongoose.Schema(
  {
    description: String,
    votes: {},
    user: mongoose.ObjectId
  }
  { timestamps: true }
)

const Suggestion = mongoose.model('Suggestion', suggestionSchema)

module.exports = Suggestion
