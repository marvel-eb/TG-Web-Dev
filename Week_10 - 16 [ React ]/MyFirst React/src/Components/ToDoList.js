import React, { Component } from "react";

import ToDoItems from "./ToDoItems";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inpputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    // this.props.delete(key);
    console.log("key in deleteItem:" + key);
    console.log("Items at delete:" + this.state.ietms);

    let filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="container">
        <h2> 04// Side Effects en Lifecycle Methods </h2>
        <hr />

        <h4>- To-Do Opdracht</h4>

        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter Your Task"
            ></input>
            <button type="submit" className="btn">
              {" "}
              Add plz
            </button>
          </form>
        </div>

        <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
export default ToDoList;
