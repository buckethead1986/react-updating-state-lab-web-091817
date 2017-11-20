// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  updateClicks = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return (
      <button onClick={this.updateClicks}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
