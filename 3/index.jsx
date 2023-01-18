import React from "react";

class ColorInfo3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "violet" };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ color: "gray" });
      }, 1000);
    }

    render() {
      return (
        <div>
          <h1>Color is {this.state.color}</h1>
          <div id="color-div">
            The updated color is {this.state.color}
          </div>
        </div>
      );
    }
  }

  export default ColorInfo3;
