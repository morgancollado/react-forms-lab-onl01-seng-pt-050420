import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      maxChars: this.state.maxChars - e.target.value.length
    })
  }

  // handleMaxChars = (e) => {
  //   this.setState(previousState => {
  //     return {
  //       maxChars: previousState.maxChars - 1
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}
        type="text" name="message" id="message" value={this.state.message}/>
        <p>You have {this.state.maxChars} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
