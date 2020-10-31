import React from 'react';
import axios from 'axios';
import Store from './Store.js';
import {observer} from 'mobx-react';

class LinkForm extends React.Component {

  createNewName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  createNewSuggestion = (event) => {
    this.setState({
      suggestion: event.target.value
    })
  }

  addSuggestion = (event) => {
    event.preventDefault();
    event.target.reset();
    axios.post('/suggestion/' + Store.lobby._id,
      {
        name: this.state.name,
        suggestion: this.state.suggestion
      })
      .then(
        (response) => {
        Store.lobby = response.data
        }
      )
  }

  render () {
    return (
      <div className="link-form">
        <form onSubmit={this.addSuggestion}>
          <input type="text" onChange={this.createNewName} placeholder="Name" /> <br />
          <input type="text" onChange={this.createNewSuggestion} placeholder="Suggestion" /> <br />
          <input type="submit" value="Add Suggestion" />
        </form>
      </div>
    )
  }
}

export default observer(LinkForm);
