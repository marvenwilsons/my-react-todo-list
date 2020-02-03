import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";
import { ReactSVG } from "react-svg";
import listSvg from "./svg/checklist.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export class showTodos extends Component {
  render() {
    return (
      <Paper
        elevation={3}
        style={{
          maxWidth: "860px",
          height: "90%"
        }}
        className="fullheight flex1 pad125"
      >
        <div className="pad125">
          {/* Heading */}
          <div className="flex spacebetween flexcenter">
            <h2
              className="pacifico flex flexcenter"
              style={{ fontWeight: "100" }}
            >
              <div
                className=" pad125"
                style={{ borderRadius: "200px", background: "#f50057" }}
              >
                <FontAwesomeIcon color="white" icon={faCoffee} />
              </div>
              <span className="margin125 pacifico">
                Your {JSON.parse(this.props.todos).length} Todo list{" "}
              </span>
            </h2>
            <span className="pointer">
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px" }}
              >
                <strong>Add New Todo</strong>
              </Button>
              <Button variant="contained" color="primary">
                <strong>Show Completed Todos</strong>
              </Button>
            </span>
          </div>
          {/* Loop! */}
          {JSON.parse(this.props.todos).map((e, i) => (
            <Paper
              style={{
                padding: "15px",
                color: "#333",
                background: "#eee",
                margin: "20px",
                borderRadius: "5px"
              }}
              className="flex pointer"
              key={i}
            >
              <div></div>
              <div className="fullwidth flex">
                <div className="flex flexcenter">
                  <h5 style={{ margin: "0", fontWeight: "400" }}>
                    {i + 1}. {e.title}
                  </h5>
                </div>
              </div>
              <div className="pointer fullwidth">
                <div className="flex flexend">
                  <Button style={{ marginRight: "20px" }}>
                    <span className="accent">show more</span>
                  </Button>
                  <Button color="secondary">
                    <span className="marginRight050 padright050">delete</span>
                    <FontAwesomeIcon className="accent" icon={faTrashAlt} />
                  </Button>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      </Paper>
    );
  }
}

export default showTodos;
