import React, { Component } from 'react';
import tomato from './tomato.png'
class Addition7  extends Component {
  constructor(props) {
        super(props);
         this.state = { count7: 0 };
    }
  increment7() {
    alert("your liking will credit the photographer")
        this.setState({
               count7 : this.state.count7 + 1 
          })
  }
  render() {
    return (
        <>
        <div id="adds">
            <div className="inner">
                      <img src={tomato}
                          alt="pic"
                          width="250px"
                          height="250px"
                      />
                    <p>chef</p>
            <button title="click to like"
              className="buttons"
              onClick={() => this.increment7()}>
              liked: {this.state.count7}</button>
            < div >   
              < img scr={tomato}  alt=" "/>
              <a href={tomato} download>
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

export default Addition7 ;

