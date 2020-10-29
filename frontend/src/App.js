import React from 'react';
import LobbyForm from './components/lobbyForm.js';
import Header from './components/header.js';
import Lobby from './components/lobby.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

class App extends React.Component {


  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/" component={LobbyForm} />
              <Route path="/lobby/:id" component={Lobby}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
