import React, { Component } from "react";

export class header extends Component {
  // methods
  headerStye = () => {
    return {
      background: "#333",
      color: "white",
      paddingLeft: "25px",
      paddingTop: "2px",
      paddingBottom: "2px"
    };
  };

  // template
  render() {
    return (
      <div style={this.headerStye()}>
        <h2
          className="pacifico pad125"
          style={{ fontWeight: "100", color: "white" }}
        >
          {" "}
          My Todo List{" "}
        </h2>
      </div>
    );
  }
}

export default header;
