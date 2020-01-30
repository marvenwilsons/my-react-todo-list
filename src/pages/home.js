import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Form, Alert } from "react-bootstrap";

export default function home() {
  return (
    <div
      style={{
        backgroundImage: `url(${`coffe.jpg`})`,
        backgroundSize: "cover"
      }}
      className="fullheight-percent flex flexcenter relative flexcol"
    >
      <div
        style={{ background: "#333", opacity: "0.7" }}
        className="absolute fullwidth fullheight-percent"
      ></div>

      <h2
        className="pacifico pad125 flex flexcenter"
        style={{ color: "white", zIndex: "100", fontWeight: "100" }}
      >
        Coffe List
      </h2>
      <Paper
        elevation={3}
        className="pad125"
        style={{ width: "350px", zIndex: "100" }}
      >
        {/* username */}
        <Form.Group className="pad125" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter Username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/* password */}
        <Form.Group
          className="padleft125 padright125"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* alert */}
        {/* <div className="padtop125 padleft125 padright125">
          <Alert variant="danger">Username or password is Incorrect!</Alert>
        </div> */}
        {/* submit */}
        <div className="pad125 flex flexend">
          <Button variant="contained" color="secondary" type="submit">
            <strong>Submit</strong>
          </Button>
        </div>
      </Paper>

      <div className="flex flexcenter">
        <span
          style={{ color: "white", zIndex: "100" }}
          className="pointer pad125"
        >
          Sign Up
        </span>
      </div>
    </div>
  );
}
