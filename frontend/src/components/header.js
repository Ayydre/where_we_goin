import React from 'react';
import Body from './body.js';

class Header extends React.Component {

  render () {
    return (
      <div className="main">
      <div className="top">
        <div className="logo">
          <h5 className="logo-h5">introducing</h5>
          <img src="../images/whereto.png" alt="whereto" />
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
                <video src="../images/fun.mp4" frameBorder="0" className="d-block w-100" title="fun" autoPlay muted loop allowFullScreen />
            </div>
            <div className="carousel-item" data-interval="5000">
              <video src="../images/smile.mp4" frameBorder="0" className="d-block w-100" title="smile" autoPlay muted loop allowFullScreen />
            </div>
            <div className="carousel-item" data-interval="5000">
              <video src="../images/dinner.mp4" frameBorder="0" className="d-block w-100" title="dinner" autoPlay muted loop allowFullScreen />
            </div>
          </div>
        </div>
      </div>
      <Body />
      </div>
    );
  }
}

export default Header;
