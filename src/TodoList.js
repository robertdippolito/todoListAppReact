import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== ""){
      var newItem = {
        text: this._inputElement.value,
        // React needs some form of key to help it assign order to lists
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          //returns a new array instead of mutating an existing array
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={ this.addItem }>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
