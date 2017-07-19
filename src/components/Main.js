import 'normalize.css/normalize.css';
import 'styles/App.css';
import "styles/reactor.styl";

import React from 'react';

class AppComponent extends React.Component {
  state = {
    color: "",
    num: 0
  }
  constructor(props) {
    super(props);
    this.changeColors = this.changeColors.bind(this);
  }
  componentDidMount() {
    this.changeColors();
  }
  genNumber() {
    return Math.floor((Math.random() * 3) + 1);
  }
  changeColors() {
    let color = "red"
    let num = this.genNumber()
    while(this.state.num === num) {
      num = this.genNumber()
    }
    if(num === 2) {
      color = "white"
    } else if (num === 3) {
      color = "black"
    }
    this.setState({ color, num });
  }
  render() {
    return (
      <div
        className={`wraper ${this.state.color}`}
        onClick={this.changeColors}
      >
        <div className="reactor">
          <div className="content">
            <div className="logo">
            </div>
            <div className="text">
              <h2>Reactor is a development studio based in Zagreb
                  that turns your ideas into reality, with high attention to
                  detail and no technical depth!
              </h2>
              <div className="line"></div>
              <p className="contact"><b>Contact Us</b> <br/> hello@reactor.studio</p>
            </div>
            <p className="copyright">© 2016  ReactorStudio Limited</p>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
