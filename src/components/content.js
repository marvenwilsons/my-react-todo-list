import React, { Component } from "react";

import AddTodoComponent from "./addTodo";
import ShowTodos from "./showTodos";
import uuid from "uuid";

import { Button, Paper } from "@material-ui/core";
import { ReactSVG } from "react-svg";

import BoxSvg from "./svg/Anonymous-Package.svg";

export class content extends Component {
  state = {
    showModal: false,
    todos: []
  };
  // state

  // methods
  addTodo() {
    // this.setState.showModal = true
    this.setState({
      showModal: true
    });
  }

  receivedTodo = ({ title, desc }) => {
    if (title.trim() == "" || !title) {
      console.log("title is undefined");
    } else if (desc.trim() == "" || !desc) {
      console.log("desc is undefined");
    } else if (
      title.trim() != "" ||
      (title != undefined && desc.trim() != "") ||
      desc != undefined
    ) {
      const newTodo = {
        title,
        desc,
        id: uuid.v4(),
        deadLine: "",
        completed: "",
        completedOn: "",
        createdOn: ""
      };

      if (this.state.todos.length === 0) {
        this.setState({
          todos: [newTodo]
        });
      } else {
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      }
    }
  };

  //
  getTodos = () => {
    // For some fucked up reason React cannot handle
    // object as props passed while rendering the component
    // its so weak
    return JSON.stringify(this.state.todos);
    // return this.state.todos
  };

  getview = len => {
    console.log("get view");

    if (this.state.showModal === true && len === 0) {
      // bubble event, emit event
      return <AddTodoComponent addTodoMethod={this.receivedTodo} />;
    } else {
      if (len === 0) {
        return (
          <Paper elevation={3} className="flex flexcol pad125">
            <div className="flex flexcenter fullwidth">
              <ReactSVG style={{ width: "150px" }} src={BoxSvg} />
            </div>
            <h2 className="pacifico margin125">You dont have any Todo Items</h2>
            {this.state.showModal}
            <Button
              variant="contained"
              color="secondary"
              onClick={e => this.addTodo(e)}
            >
              <strong>Add A Todo Item</strong>
            </Button>
          </Paper>
        );
      } else {
        console.log("yes");
        return <ShowTodos todos={this.getTodos()} />;
      }
    }
  };

  //
  render() {
    return (
      <div style={{ display: "flex", flex: "1" }} className="flexcenter">
        {/* {this.state.todos.length} */}
        {this.getview(this.state.todos.length)}
      </div>
    );
  }
}

export default content;
