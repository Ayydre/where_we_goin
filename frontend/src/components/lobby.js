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
          <div className="side-info">
            <div className="top-logo">
              <img src="../images/whereto.png" alt="whereto" className="logoimg" />
            </div>
            <LinkForm></LinkForm>
            <div className="vote-list">
              <span>VOTE</span>
              <ul>
                {Store.lobby.suggestions.map((suggestion) => {
                  return (
                    <li key={suggestion._id}>
                      <p>{/*suggestion.user.name*/} {suggestion.description}</p>
                    </li>
                  )})}
              </ul>
            </div>
            <div className="share-link">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shareModal">
              <ion-icon name="share-social-outline"></ion-icon> SHARE LINK
              </button>
              <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="shareModalLabel"><ion-icon name="share-social-outline"></ion-icon> SHARE</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <span>http://whereto.herokuapp.com/lobby/{this.props.match.params.id}</span>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-info">
            <div className="lobby-title">
              <h1>{Store.lobby.title}</h1>
            </div>
            <div className="scores">
            </div>
          </div>
        </div>
      )
    }
  }
}

export default observer(Lobby);
