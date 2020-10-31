import React from 'react';
import axios from 'axios';
import Store from './Store.js';
import {observer} from 'mobx-react';
import Header from './header.js';
import Body from './body.js';

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
      <div>
      <Header />
      <div className="form-area">
        <details className="dropdown">
        <summary className="form-button">START A LOBBY</summary>
          <form className="form" onSubmit={this.makeLobby}>
            <div className="form-box">
              <div className="form-group">
                <label className="form-label" htmlFor="dropdownFormName">NAME*</label><br/>
                <input type="text" onChange={this.createNewName} className="form-input" id="dropdownFormName" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="dropdownFormTitle">GROUP TITLE*</label><br/>
                <input type="text" onChange={this.createNewTitle} className="form-input" id="dropdownFormTitle" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="dropdownFormSuggestion">SUGGESTION*</label><br/>
                <input type="text" onChange={this.createNewSuggestion} className="form-input" id="dropdownFormSuggestion" />
              </div>
              <div className="form-group">
                <input type="radio" onChange={this.chooseType} name="type" value="Poll"/>
                <label className="form-label-radio" htmlFor="Poll">Poll</label>
              </div>
              <div>
                <input type="radio" onChange={this.chooseType} name="type" value="Random Generator"/>
                <label className="form-label-radio" htmlFor="Random Generator">Random Generator</label>
              </div> <br />
              {/*<input type="number" onChange={this.chooseNumSuggestions} placeholder="Number of Suggestions (Max: 3)"/><br />*/}
              <div className="create">
                <input className="create-lobby" type="submit" value="Create Lobby" />
              </div>
            </div>
          </form>
        </details>
      </div>
      </div>
    )
  }
}

export default observer(LobbyForm);
