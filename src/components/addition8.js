import React, { Component } from 'react';
import time from './time.jpg'
class Addition8 extends Component {
  constructor(props) {
    super(props);
    this.state = { count8: 0 };
    }
  increment8() {
    alert("your liking will credit the photographer")
        this.setState({
          count8: this.state.count8 + 1
     
        })
    } 
  render() {
      return (
          <div id="adds">
                <div className="inner">
                    <img src={time}
                        alt="pic"
                        width="250px" 
                        height="250"   
                    />
                    <p>motivation</p>
            <button title="click to like"
              className="buttons"
              onClick={() => this.increment8()}>
              liked: {this.state.count8}</button>
            < div >
              < img scr={time}  alt=" " />
              <a href={time} download>
                <button
                  className="buttons1"
                  type="button"
                >Download</button>
              </a>
            </div>
                </div>
          </div>

    );
  }
}

export default  Addition8;

