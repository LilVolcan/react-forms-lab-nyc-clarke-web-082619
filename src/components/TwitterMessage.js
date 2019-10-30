import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    // let messageLength = event.target.value.length
    // console.log(messageLength)
    this.setState({
      message: event.target.value
    })
  }

  render() {
    //  console.log(this.state.message)
    return (
      <div>
        <strong>Your message: </strong>
        <input 
          type="text" 
          onChange={event => this.handleMessage(event)} 
          value={this.state.message}
          name="message" 
          id="message" />
        <p>You have {this.props.maxChars - this.state.message.length} remaining!</p>
      </div>
    );
  }
}

export default TwitterMessage;
