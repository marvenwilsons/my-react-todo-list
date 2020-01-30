import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faCoffee, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export class header extends Component {
  // methods
  headerStye = () => {
    return {
      background: "#333",
      color: "white"
    };
  };

  // template
  render() {
    return (
      <div className="flex spacebetween " style={this.headerStye()}>
        <h4
          className="pacifico pad025 flexcenter flex"
          style={{ fontWeight: "100", color: "white" }}
        >
          <div
            className="pad125 marginright050 marginleft050"
            style={{ borderRadius: "200px", background: "#f50057" }}
          >
            <FontAwesomeIcon color="white" icon={faCoffee} />
          </div>
          Coffe List
        </h4>
        <div className="flex flexcenter marginright125">
          <span>
            <Link to="/Explore">
              <span style={{ color: "white" }} className="marginright125">
                Explore
              </span>
            </Link>
          </span>

          <Link to="/MyList">
            <span style={{ color: "white" }} className="marginright125">
              My List
            </span>
          </Link>

          <Link to="/myAccount">
            <span className="marginright125" style={{ color: "white" }}>
              My Account
            </span>
          </Link>
          <span className="marginright125">Log out</span>
        </div>
      </div>
    );
  }
}

export default header;
