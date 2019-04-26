import React, { Component } from 'react';
import leopard from './leopard.jpg'
class Addition5 extends Component {
  constructor(props) {
    super(props);
    this.state = { count5: 0 };
  }
  increment5() {
    alert("your liking will credit the photographer")
         this.setState  ({
         count5:  this.state.count5 + 1
     })
}
    render() {
      return (
          <>
              <div id="adds">
              <div className="inner">
                  <img src={leopard}
                      alt="pic"
                      width="250px"
                      height="250px"
                  
                  />
                    <p>wildlife</p>
              <button title="click to like"
                className="buttons"
                onClick={() => this.increment5()} >
                liked:{this.state.count5}</button>
              < div >
                < img scr={leopard} alt=" " />
                <a href={leopard} download>
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
      
      export default Addition5;
      
