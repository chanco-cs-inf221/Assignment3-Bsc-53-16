import React, { Component } from 'react';
import code1 from './code1.jpg'
class Addition3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count3: 0 };
    }
  increment3() {
    alert("your liking will credit the photographer")
        this.setState({
            count3: this.state.count3 + 1
        })
    }   

  render() {
      return (
          <div id="adds">
        <div className="inner">
            <img src={code1}
                      alt="pic"
                      width="250px"
                      height="250px"       
            />
            <p>motivattion</p>
            <button title="click to like"
              className="buttons"
              onClick={() => this.increment3()}>
              liked: {this.state.count3}</button>
            < div >
              < img scr={code1} alt=" " />
              <a href={code1} download>
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

export default Addition3 ;

