import React, { Component } from 'react';
import programmer from './programmer.jpg'
class  Addition6 extends Component {
  constructor(props) {
    super(props);
    this.state = { count6: 0 };
  }
  increment6() {
    alert("your liking will credit the photographer")
        this.setState({
            count6: this.state.count6 + 1
        })
    }   
  render() {
      return (
          <div id="adds">
                <div className="inner">
                        <img src={programmer}
                            alt="pic"
                            width="250px"
                            height="250"  
                        />
                        <p>motivation</p>
            <button title="click to like"
              className="buttons"
              onClick={() => this.increment6()}>
              liked: {this.state.count6}</button>
            < div >
              < img scr={programmer} alt=" " />
              <a href={programmer} download>
                <button
                  className="buttons1"
                  type="button"
                >Download</button>
              </a>
            </div>
                </div>
           </div >
    );
  }
}

export default Addition6;

