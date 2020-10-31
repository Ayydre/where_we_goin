import React from 'react';
import Store from './Store.js';
import LinkForm from './linkForm.js';
import axios from 'axios';
import {observer} from 'mobx-react';

class Lobby extends React.Component {

  componentDidMount() {
    axios.get('/lobby/' + this.props.match.params.id)
    .then(
      (response) => {
        Store.lobby = response.data
      }
    )
  }

  render() {
    if (!Store.lobby) {
      return null
    } else {
      return (
        <div className="lobby">
          <LinkForm></LinkForm>
          <h1>{Store.lobby.title}</h1>
          <ul>
            {Store.lobby.suggestions.map((suggestion) => {
              return (
                <li key={suggestion._id}>
                  <p>{/*suggestion.user.name*/} {suggestion.description}</p>
                </li>
              )})}
          </ul>
        </div>
      )
    }
  }
}

export default observer(Lobby);
