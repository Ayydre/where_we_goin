const mongoose = require('mongoose')
const User = require('./user.js')

const suggestionSchema = new mongoose.Schema(
  {
    description: String,
    // votes: {},
    user: User.schema
  },
  { timestamps: true }
)

const Suggestion = mongoose.model('Suggestion', suggestionSchema)

module.exports = Suggestion
