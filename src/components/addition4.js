import React, { Component } from 'react';
import gail from './gail.jpg'
class Addition4  extends Component {
  constructor(props) {
    super(props);
    this.state = { count4: 0 };
    }
  increment4() {
    alert("your liking will credit the photographer")
        this.setState({
            count4: this.state.count4 + 1
        })
    }   

  render() {
    return (
        <>
            <div id="adds">
                <div className="inner">
                        <img src={gail}
                              alt="pic"
                              width="250px"
                              height="250px"         
                        />
                      <p>fashion</p>
            <button title="click to like" className="buttons"
              onClick={() => this.increment4()}>
              liked: {this.state.count4}</button>
            < div >
              < img scr={gail} alt=" " />
              <a href={gail} download>
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

export default Addition4;

