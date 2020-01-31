import React, { Component } from "react";
import { Button, Paper, Avatar, Divider } from "@material-ui/core";
import { Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export class allList extends Component {
  // data
  constructor(props) {
    super(props);
    this.state = { hoverIndex: null };
  }
  // methods
  onHover = id => {
    this.setState({
      hoverIndex: id
    });
  };

  render() {
    //   props
    const { list, showAddListForm } = this.props;
    // template
    return (
      <div
        style={{ overflowY: "auto" }}
        className="fullheight-percent fullwidth flex flexwrap flexcenter relative"
      >
        <div className="fullwidth fullheight-percent flex flexcenter absolute pad125 flexstart flexcol">
          <div className=" fullwidth flex flexcenter">
            <div
              className="fullwidth"
              style={{
                maxWidth: "1080px"
              }}
            >
              <div className="flex spacebetween padtop125 marginbottom125">
                <h4 className="pacifico">Your Lists</h4>
                <Button
                  onClick={() => {
                    showAddListForm(true);
                  }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  <strong>create new list</strong>
                </Button>
              </div>
              <Divider></Divider>
            </div>
          </div>
          <div
            style={{
              maxWidth: "1080px"
            }}
            className="fullwidth flex flexwrap flexstart margintop050"
          >
            {/* on click redirect to myListContent/listID */}
            {list.map((e, i) => (
              <Link to={`mylistContents/${e.listTitle}`}>
                <Paper
                  onMouseOver={() => {
                    this.onHover(`list${i}`);
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      hoverIndex: undefined
                    });
                  }}
                  key={i}
                  id={`list${i}`}
                  elevation={this.state.hoverIndex === `list${i}` ? 3 : 1}
                  style={{
                    width: "500px",
                    minHeight: "100px",
                    maxHeight: "300px"
                  }}
                  className="pad125 margin125 pointer flex flexcol"
                >
                  {/* Avatar */}
                  <div
                    style={{ alignItems: "center" }}
                    className="padbottom050 flex"
                  >
                    <Avatar alt="Remy Sharp">B</Avatar>
                    <span className="padleft050">Marven Wilson Donque</span>
                  </div>
                  {/* title */}
                  <h5>{e.listTitle}</h5>
                  {/* badge */}
                  <div className="padbottom025">
                    <Badge pill variant="secondary">
                      Category Name
                    </Badge>
                  </div>
                  <div className="flex">
                    <div className="padright125">26,023 views</div>
                    <div className="padright125">Jan 11,2020</div>
                    <div className="padright125">
                      <span className="padright125">
                        <FontAwesomeIcon color="gray" icon={faThumbsUp} /> 2.1K
                      </span>
                      <span className="padright125">
                        <FontAwesomeIcon color="gray" icon={faThumbsDown} /> 5K
                      </span>
                      <span>
                        <FontAwesomeIcon color="gray" icon={faEdit} />
                        <span className="padright125"> Edit List </span>
                      </span>
                    </div>
                  </div>
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default allList;
