import React from 'react';
import LobbyForm from './components/lobbyForm.js';
import Lobby from './components/lobby.js';
import Footer from './components/footer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/LandingPage.css';

class App extends React.Component {


  render () {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LobbyForm} />
              <Route path="/lobby/:id" component={Lobby}/>
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
