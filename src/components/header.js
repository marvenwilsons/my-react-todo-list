import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge } from "@material-ui/core";

import { Link } from "react-router-dom";

import {
  faCoffee,
  faTrashAlt,
  faBell
} from "@fortawesome/free-solid-svg-icons";

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
          className="pacifico pad025 flexcenter flex pointer"
          style={{ fontWeight: "100", color: "white" }}
        >
          <div className="pad125" style={{ borderRadius: "200px" }}>
            <FontAwesomeIcon color="white" icon={faCoffee} />
          </div>
          Coffe List
        </h4>
        <div className="flex flexcenter marginright125">
          <span>
            <Link to="/Explore">
              <span
                style={{ color: "white" }}
                className="marginright125 pacifico"
              >
                Explore
              </span>
            </Link>
          </span>

          <Link to="/MyList">
            <span
              style={{ color: "white" }}
              className="marginright125 pacifico"
            >
              My List
            </span>
          </Link>
          <Link to="/MyFriends">
            <span
              style={{ color: "white" }}
              className="marginright125 pacifico"
            >
              My Friends
            </span>
          </Link>
          <span className="marginright125 pointer">
            <Avatar alt="Name">
              <FontAwesomeIcon color="white" icon={faBell} />
            </Avatar>
          </span>
          <span className="pointer">
            <Avatar alt="Name">M</Avatar>
          </span>

          {/* <Link to="/myAccount">
            <span className="marginright125" style={{ color: "white" }}>
              My Account
            </span>
          </Link>
          <span className="marginright125">Log out</span> */}
        </div>
      </div>
    );
  }
}

export default header;
