import 'normalize.css/normalize.css';
import 'styles/App.css';
import "styles/reactor.styl";

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="reactor">
        <div className="content">
          <div className="logo">
          </div>
          <div className="text">
            <h2>Reactor is a new digital product studio in Hong Kong and Zagreb
              that creates joyful digital ideas, products and experiences. <br/> They connect
              hearts of brands with hearts of their consumers.</h2>
            <div className="line"></div>
            <p className="contact"><b>Contact Us</b> <br/> hello@reactor.studio</p>
          </div>
          <p className="copyright">© 2016  ReactorStudio Limited</p>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
