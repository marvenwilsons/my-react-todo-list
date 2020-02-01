import React, { Component } from "react";
import { Button, Card, TextField, Divider } from "@material-ui/core";

class componentName extends Component {
  // Name
  // email address --> send email confirmation
  // username
  // password
  // intirest
  // not a robot
  render() {
    return (
      <div
        style={{ background: "white" }}
        className="fullheight-percent flex flexcenter"
      >
        <Card variant="outlined" style={{ width: "500px" }} className="pad125">
          {/* lgogo */}
          <div className="flex flexcenter padtop125 margintop125 marginbottom125">
            <h4 className="pacifico">Coffe List</h4>
          </div>
          {/* sign up */}
          <div className="flex flexcenter marginbottom125">
            <h4>Sign Up</h4>
          </div>
          {/* form */}
          <div className="pad125">
            <div className="pad125">
              <TextField
                id="standard-basic"
                className="fullwidth"
                label="Full Name"
              />
            </div>
            <div className="pad125">
              <TextField
                id="standard-basic"
                className="fullwidth"
                label="Email"
              />
            </div>
            <div className="pad125">
              <TextField
                id="standard-basic"
                className="fullwidth"
                label="Username"
              />
            </div>
            <div className="pad125">
              <TextField
                id="standard-basic"
                className="fullwidth"
                label="Password"
                helperText="At least: 1 number, 1 uppercase letter & 1 special charater"
                type="password"
              />
            </div>
            <div className="pad125">
              <TextField
                id="standard-basic"
                className="fullwidth"
                label="Re type Password"
                type="password"
              />
            </div>
            <div className="pad125 flex flexend">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default componentName;
