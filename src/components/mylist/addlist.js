import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";

import { ReactSVG } from "react-svg";
import pencilSvg from "../svg/pencil.svg";

export class addTodo extends Component {
  state = {
    title: "",
    desc: ""
  };

  // template
  render() {
    // props from parent
    const { addTodoMethod, showAddListForm } = this.props;

    // react is horrible they should not allow me to do this
    const AddTodoStyle = {
      width: "400px",
      borderRadius: "4px",
      color: "#333",
      border: "1px solid #eee",
      padding: "30px"
    };

    // template
    return (
      <div>
        <div
          onClick={() => {
            showAddListForm(false);
          }}
          className="marginbottom050 pointer textboldhover"
        >
          <span className="padright025">&#9666;</span> Go Back To My List
        </div>
        <Paper elevation={3}>
          <div style={AddTodoStyle} className="flex flexcol">
            {/* todo title  */}
            <h5 className="pacifico">
              <ReactSVG
                style={{ width: "10px", height: "10px" }}
                src={pencilSvg}
              />
              Add New List
            </h5>
            <div style={{ marginBottom: "10px" }}>
              {/* on input change it mutates the title property */}
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="List Title"
                  aria-label="List Title"
                  aria-describedby="basic-addon1"
                  onChange={
                    // mutates the state value
                    e => {
                      this.setState({ title: e.target.value });
                    }
                  }
                />
              </InputGroup>
            </div>

            {/* todo description */}
            <div>
              <InputGroup>
                <FormControl
                  placeholder="List Description"
                  onChange={e => {
                    this.setState({ desc: e.target.value });
                  }}
                  as="textarea"
                  aria-label="With textarea"
                />
              </InputGroup>
            </div>
            {/* submit */}
            <div
              className="flex flexend pointer "
              style={{ marginTop: "15px" }}
            >
              {/* {this.addTodoComp()} */}
              <Button
                onClick={() =>
                  addTodoMethod({
                    title: this.state.title,
                    desc: this.state.desc
                  })
                }
                variant="contained"
                color="secondary"
              >
                <strong>Create List</strong>
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default addTodo;
