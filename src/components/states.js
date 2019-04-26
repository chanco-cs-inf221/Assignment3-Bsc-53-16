import React, { Component } from 'react'

class States extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job:' '
        }
    }
    handlejobposted = (event) => { 
        this.setState({
         job : event.target.value
     })    
    }
    hundleSubmit = event => {
        alert("thank you for saving a life")
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.hundleSubmit}>
                <div id="form">
                    <label>input the job <hr/></label>
                    <input type='text' value={this.state.job}
                    onChange={this.handlejobposted}/>
                </div>
                <button type="submit" id="posting">Post</button>
            </form>
        )
    }
}
export default States