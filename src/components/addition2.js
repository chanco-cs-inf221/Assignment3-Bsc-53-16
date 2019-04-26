import React, { Component } from 'react';
import dream from './dream.jpg'
class Addittion2 extends Component {
  constructor(props) {
    super(props);
   
        this.state = { count2: 0};
  }
  increment2() {
    alert("your liking will credit the photographer")
    this.setState({
        count2: this.state.count2 + 1
    })
}   

  render() {
      return (
          <div id="adds">
              <div className="inner">
            <img src={dream}
                alt="pic"
                width="250px"
                height="250px"
           
            />
            <p>encoragement</p>
              <button title="click to like"
                className="buttons"
                onClick={() => this.increment2()}>
                liked: {this.state.count2}</button>
                    < div >
                     < img scr={dream} alt=" " />
                    <a href={dream} download>
                    <button
                          className="buttons1"
                          type="button"
                    >Download</button>
                  </a>
                </div>
                  </div  >
              </div  >
       
    );
  }
}

export default Addittion2 ;

