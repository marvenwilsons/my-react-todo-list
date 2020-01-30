import React, { Component } from "react";
import { Button, Paper, Avatar } from "@material-ui/core";

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
              <div className="borderred fullwidth">
                <div>
                  <h3>Context Title</h3>
                </div>
              </div>
              <div className="borderred fullwidth">Context</div>
              <div>likes and stats | revision request</div>

              <div className="borderred fullwidth">Comments</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default content;
