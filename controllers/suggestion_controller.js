const express = require('express');
const suggestion = express.Router();
const Lobby = require('../models/lobby.js');
const User = require('../models/user.js');
const Suggestion = require('../models/suggestion.js');

suggestion.post('/:id', async(req, res) => {
  try {
    let user = await User.create({name: req.body.name})
    let suggestion = await Suggestion.create({description: req.body.suggestion, user: user})
    let lobby = await Lobby.findByIdAndUpdate(req.params.id, {$push: { suggestions: suggestion, users: user }} ,{new: true})
    res.json(lobby)
  } catch (e){
    console.log("error message", e.message);
  }
})

suggestion.put('/suggestions/:id', async(req, res) => {
  try {
    let suggestion = await Suggestion.findByIdAndUpdate(req.params.id, {$inc: {votes: +1}})
    console.log(suggestion);
    let lobby = await Lobby.findByIdAndUpdate(req.body.lobbyId, { $set: {suggestions: suggestion}}, {new: true})
    res.json(lobby)
  } catch (e){
    console.log("error message", e.message);
  }
})

module.exports = suggestion
