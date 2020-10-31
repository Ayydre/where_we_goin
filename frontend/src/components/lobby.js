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
              <div className="votebox-title">
                <span className="vote">VOTE</span>
              </div>
              <ul className="suggestions">
                {Store.lobby.suggestions.map((suggestion) => {
                  return (
                    <li className="suggestion" key={suggestion._id}>
                      <p className="suggest">{suggestion.description}</p>
                    </li>
                  )})}
              </ul>
            </div>
            <div className="share-link">
              <button type="button" className="btn share-button" data-toggle="modal" data-target="#shareModal">
              <ion-icon name="share-social-outline"></ion-icon> SHARE LINK
              </button>
              <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="shareModalLabel"><ion-icon name="share-social-outline"></ion-icon> SHARE</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <span className="sharelink">http://whereto.herokuapp.com/lobby/{this.props.match.params.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-info">
            <div className="lobby-title">
              <h1 className="title-font">{Store.lobby.title}</h1>
            </div>
            <div className="scores">
              <ul className="suggestions-2">
                {Store.lobby.suggestions.map((suggestion) => {
                  return (
                    <li className="suggestion-2" key={suggestion._id}>
                      <div className="score-box">
                        <p className="suggest-2">{suggestion.description}</p>
                        <div className="percentage"></div>
                      </div>
                    </li>
                  )})}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default observer(Lobby);
