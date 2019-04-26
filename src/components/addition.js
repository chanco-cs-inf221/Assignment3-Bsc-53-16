import doit from './doit.jpg'
import React, { Component } from 'react';
class Addition extends Component {
  constructor(props) {
    super(props);
     this.state = { count: 0 };
  }
  increment1() {   
    alert("your liking will credit the photographer")
        this.setState({
            count: this.state.count + 1        
        })
    }   
  render() {
    return (
                 <>
                <div id="adds">
                    <div className="inner">
                        <img src={doit}
                            alt="pic"
                            width="250px"
                            height="250px"
                               
                        />
                        <p>encoragement:</p>
            <button title="click to like"
              className="buttons"
              onClick={() => this.increment1()}>
              liked: {this.state.count}</button>
            < div >
              < img scr={doit} alt=" " />
              <a href={doit} download>
                <button
                  className="buttons1"
                  type="button"
                >Download</button>
              </a>
            </div>
                    </div>
                </div>
            </>
    );
  }
}

export default Addition;

