import React from 'react';
import axios from 'axios';
import Store from './Store.js';
import {observer} from 'mobx-react';

class LobbyForm extends React.Component {

  createNewName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  createNewTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  createNewSuggestion = (event) => {
    this.setState({
      suggestion: event.target.value
    })
  }

  chooseType = (event) => {
    this.setState({
      type: event.target.value
    })
  }

  chooseNumSuggestions = (event) => {
    this.setState({
      numSuggestions: event.target.value
    })
  }

  makeLobby = (event) => {
    event.preventDefault();
    event.target.reset();
    axios.post('/lobby',
      {
        name: this.state.name,
        title: this.state.title,
        suggestion: this.state.suggestion,
        type: this.state.type,
        numSuggestions: this.state.numSuggestions
      })
      .then(
        (response) => {
        Store.lobby = response.data
        this.props.history.push('/lobby/' + response.data._id)
      })
  }

  render () {
    return (
      <form onSubmit={this.makeLobby}>
        <input type="text" onChange={this.createNewName} placeholder="Name" /> <br />
        <input type="text" onChange={this.createNewTitle} placeholder="Group Title" /> <br />
        <input type="text" onChange={this.createNewSuggestion} placeholder="Suggestion" /> <br />
        <div>
          <input type="radio" onChange={this.chooseType} name="type" value="Poll"/>
          <label htmlFor="Poll">Poll</label>
        </div>
        <div>
          <input type="radio" onChange={this.chooseType} name="type" value="Random Generator"/>
          <label htmlFor="Random Generator">Random Generator</label>
        </div> <br />
        <input type="number" onChange={this.chooseNumSuggestions} placeholder="Number of Suggestions (Max: 3)"/><br />
        <input type="submit" value="Create Lobby" />
      </form>
    )
  }
}

export default observer(LobbyForm);
