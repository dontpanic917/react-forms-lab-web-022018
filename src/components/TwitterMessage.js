import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ""
    }
  }
  changeMessage = (event) => {
    this.setState({message: event.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={this.changeMessage}
        />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
