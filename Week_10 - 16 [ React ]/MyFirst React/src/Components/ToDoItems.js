import React, { Component } from "react";
/////
class ToDoItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.createTasks = this.createTasks.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(key) {
    console.log("Key is:" + key);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {" "}
        {item.text}
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}
////
export default ToDoItems;
