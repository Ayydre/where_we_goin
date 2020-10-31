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
          <div className="lobbyform-title-area">
            <span className="lobbyform-title">Complete the form to</span><br/>
            <span className="lobbyform-title"> add a suggestion</span><br/>
          </div>
            <label className="form-label" htmlFor="formName">NAME*</label><br/>
            <input className="form-input" type="text" onChange={this.createNewName} id="formName" /><br/>
            <label className="form-label" htmlFor="formSuggestion">SUGGESTION*</label><br/>
            <input className="form-input" type="text" onChange={this.createNewSuggestion} id="formSuggestion" /> <br />
          <div>
            <input className="add-sugg" type="submit" value="Add Suggestion" />
          </div>
        </form>
      </div>
    )
  }
}

export default observer(LinkForm);
