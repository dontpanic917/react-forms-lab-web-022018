import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true
    };
  }
  isValidContent = (content) => {
    const lines = content.split("\n").map(line => line.trim())
    if (content && lines.length === 3) {return(
      lines[0].split(' ').length === 5 &&
      lines[1].split(' ').length === 3 &&
      lines[2].split(' ').length === 5
    )}else{return false}
  }
  setContent = (event) => {
    const content = event.target.value
    this.setState({
      content,
      isValid: this.isValidContent(content)
    })
  }
  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setContent}
        />
        { !this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }
      </div>
    );
  }
}

export default PoemWriter;
