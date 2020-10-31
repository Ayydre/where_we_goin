import React from 'react';

class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <span className="copyright">© 2020</span>
        <a href="https://github.com/Ayydre" className="link">Andre Le</a>
        <span className="sep">|</span>
        <a href="https://github.com/Ayydre/where_we_goin" className="ion-icon">
        <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/andre-kq-le/" className="ion-icon">
        <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
    );
  }
}

export default Footer;
