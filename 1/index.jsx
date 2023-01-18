import React from "react";

class ColorInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "Green" };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.colorChange(),
            1000
          ); 
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    colorChange() {
        this.setState({
            color: "Yellow"
        });
    }
  
    render() {
      return <h1>Color is {this.state.color}</h1>;
    }
  }

  export default ColorInfo;
