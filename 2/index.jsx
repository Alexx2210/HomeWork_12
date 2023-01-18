import React from "react";

class ColorInfo2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "Green" };
    }
  
    changeColor = () => {
      this.setState({ color: "Blue" });
    };
  
    shouldComponentUpdate() {
        if (this.changeColor){
            console.log('Рендер компонента заблокирован');
            return false;
        }
    }

    render() {
      return (
        <>
          <h1>Color is {this.state.color}</h1>
          <button type="button" onClick={this.changeColor}>
            Change color
          </button>
        </>
      );
    }
  }

  export default ColorInfo2;
