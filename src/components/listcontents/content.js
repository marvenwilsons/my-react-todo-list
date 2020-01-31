import React, { Component } from "react";
import { Button, Paper, Avatar, Card, Divider } from "@material-ui/core";
import { Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { faEye } from "@fortawesome/free-solid-svg-icons";

export class content extends Component {
  render() {
    const { Context, ContextIndex } = this.props;

    return (
      <div
        className="flex fullheight-percent marginright125"
        style={{ width: "700px" }}
      >
        <Paper elevation={3} className="fullwidth flex flexcol">
          <div className="fullheight-percent relative">
            <div className="absolute pad125 fullwidth">
              <div className="fullwidth margintop125 marginbottom125">
                <div>
                  <h3>{Context.listTitle}</h3>
                </div>
              </div>
              <div className="padbottom025 flex flexend"></div>
              <Divider></Divider>
              {/*  */}
              <Card
                elavation={5}
                className="pad025 marginbottom125 margintop125"
                elavation={3}
              >
                <div className="fullwidth pad050">Context</div>
              </Card>
              <Divider></Divider>

              <div className="pad025">
                {/*  */}
                <div>
                  <div className="margintop050">
                    <div className="marginbottom050 flex spacebetween flexcenter">
                      <div className="flex">
                        <Avatar alt="Name">B</Avatar>
                        <div className="flex flexcol">
                          <span className="padleft050">
                            Marven Wilson Donque
                          </span>
                          <span className="padleft050">900,00 Subscribers</span>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="flex flexcenter marginright125 pointer">
                          <h5 style={{ margin: "0", padding: "0" }}>
                            <FontAwesomeIcon color="#888" icon={faEye} />
                          </h5>
                        </span>
                        <Button color="primary" variant="contained">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Divider></Divider>

                  {/*  */}
                  <div className="flex spacebetween padtop050 padbottom050">
                    <div className="flex1 flex">
                      <div className="padright125">26,023 views</div>
                      <div className="padright125">Jan 11,2020</div>
                    </div>
                    <div className="padright125">
                      <span className="padright125 pointer">
                        <FontAwesomeIcon color="gray" icon={faThumbsUp} /> 2.1K
                      </span>
                      <span className="padright125 pointer">
                        <FontAwesomeIcon color="gray" icon={faThumbsDown} /> 5K
                      </span>
                      <span>40K comments</span>
                    </div>
                  </div>
                  <Divider></Divider>
                </div>
                {/* <div className="fullwidth">Load Comments</div> */}
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default content;
