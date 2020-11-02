const express = require('express');
const lobby = express.Router();
const Lobby = require('../models/lobby.js');
const User = require('../models/user.js');
const Suggestion = require('../models/suggestion.js');


lobby.post('/', async(req, res) => {
  try {
    let user = await User.create({name: req.body.name})
    let suggestion = await Suggestion.create({description: req.body.suggestion, user: user})
    let lobby = await Lobby.create({
      title: req.body.title,
      // numSuggestions: req.body.numSuggestions,
      type: req.body.type,
      suggestions: [suggestion],
      users: [user],
      owner: user._id
    })
    res.json(lobby)
  } catch (e){
    console.log("error message", e.message);
  }
})

lobby.get('/:id', async(req, res) => {
  let lobby = await Lobby.findById(req.params.id)
  res.json(lobby)
})

module.exports = lobby
