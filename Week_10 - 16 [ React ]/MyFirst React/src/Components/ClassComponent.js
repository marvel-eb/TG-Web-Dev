import React from "react";
// Class  Component

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Change Me, Please" };
  }
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <hr />
        <h4>- Input on change: Class Component </h4> <br />
        <input type="text" onChange={this.handleChangeName} />
        <div className="output-result">
          {" "}
          <h5>
            Hallo! Mr <span className="changable-text"> {this.state.name}</span>{" "}
          </h5>
        </div>
        <hr />
      </div>
    );
  }
}

export default ClassComponent;
