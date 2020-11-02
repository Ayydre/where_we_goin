import React from 'react';
import Store from './Store.js';
import LinkForm from './linkForm.js';
import axios from 'axios';
import {observer} from 'mobx-react';

class Lobby extends React.Component {

  state = {
    btnText: "Copy Link",
    choice: "",
    show: false
  }

  componentDidMount() {
    axios.get('/lobby/' + this.props.match.params.id)
    .then(
      (response) => {
        Store.lobby = response.data
      }
    )
  }

  onVoteUp = (event) => {
    // console.log(event.target.id);
    for (let key in Store.lobby.suggestions) {
      console.log(Store.lobby.suggestions[key]);
      axios.put('/suggestion/suggestions/' + event.target.id, 
      {
        votes: Store.lobby.suggestions[key].votes += 1,
        lobbyId: Store.lobby._id
      })
      .then(
        (response) => {
          Store.lobby = response.data
      })
    }
  }

  copyToClipboard = (e) => {
    document.getElementById('sharelink').select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({
      btnText: "Copied!"
    })
  };

  randomGenerator = () => {
    let arr = Store.lobby.suggestions
    let randItem = arr[Math.floor(Math.random()*arr.length)];
    // console.log("item", randItem);
    this.setState({
      choice: randItem.description
    })
  }

  onShow = () => {
    this.setState({ show: true });
    this.randomGenerator();
  }

  render() {
    if (!Store.lobby) {
      return null
    } else if (Store.lobby.type === "Poll"){
      return (
        <div className="lobby">
          <div className="side-info">
            <div className="top-logo">
              <a href="/"><img src="../images/whereto.png" alt="whereto" className="logoimg" /></a>
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
                      <p className="suggest" id={suggestion._id} onClick={this.onVoteUp}>{suggestion.description}</p>
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
                      <input type="text" className="sharelink" id="sharelink" defaultValue={`http://whereto-app.herokuapp.com/lobby/${this.props.match.params.id}`}/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn copy-button" onClick={this.copyToClipboard}>{this.state.btnText}</button>
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
                        <div className="percentage">
                          <span className="voteNum">{suggestion.votes}</span>
                        </div>
                      </div>
                    </li>
                  )})}
              </ul>
            </div>
          </div>
        </div>
      )
    } else if (Store.lobby.type === "Random Generator") {
      return (
        <div className="lobby">
          <div className="side-info">
            <div className="top-logo">
              <a href="/"><img src="../images/whereto.png" alt="whereto" className="logoimg" /></a>
            </div>
            <LinkForm></LinkForm>
            <div className="vote-list">
              <div className="votebox-title">
                <span className="vote">Suggestions</span>
              </div>
              <ul className="suggestions">
                {Store.lobby.suggestions.map((suggestion) => {
                  return (
                    <li className="suggestion" key={suggestion._id}>
                      <p className="suggest2">{suggestion.description}</p>
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
                      <input type="text" className="sharelink" id="sharelink" defaultValue={`http://whereto.herokuapp.com/lobby/${this.props.match.params.id}`}/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn copy-button" onClick={this.copyToClipboard}>{this.state.btnText}</button>
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
              <div className="random-area">
                <button type="button" className="btn random-button" onClick={this.onShow}>Generate a decision</button>
                { this.state.show ? <div className="decision-box">
                  <div className="item">
                    <h2 className="decision">{this.state.choice}</h2>
                  </div>
                  <div className="animation1"></div>
                  <div className="animation2"></div>
                  <div className="animation3"></div>
                  <div className="animation4"></div>
                </div> : ""}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default observer(Lobby);
