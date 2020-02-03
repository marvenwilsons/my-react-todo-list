import React from "react";
import { Button, Paper } from "@material-ui/core";
import { Form, Alert } from "react-bootstrap";

export default function Login() {
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
        <Form.Group
          className="pad125 textColorPrimary"
          controlId="formBasicEmail"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username or Email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/* password */}
        <Form.Group
          className="padleft125 padright125 textColorPrimary"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="pad125 textColorPrimary">
          Dont have an account?
          <span
            style={{ fontWeight: "600" }}
            className="marginleft050 textColorSecondary pointer"
          >
            Sign Up
          </span>{" "}
        </div>

        {/* alert */}
        {/* <div className="padtop125 padleft125 padright125">
          <Alert variant="danger">Username or password is Incorrect!</Alert>
        </div> */}
        {/* submit */}
        <div className="pad125 flex flexend">
          <Button variant="contained" color="primary" type="submit">
            <strong>Login</strong>
          </Button>
        </div>
      </Paper>

      <div style={{ width: "350px", zIndex: "100" }} className="flex flexend">
        <span
          style={{ color: "white", zIndex: "100" }}
          className="pointer padtop125"
        >
          <span
            style={{ fontWeight: "600", color: "lightgray" }}
            className="marginright125"
          >
            Forgot Account
          </span>
          <span
            style={{ fontWeight: "600", color: "lightgray" }}
            className="marginright125"
          >
            Privacy
          </span>
          <span
            className="marginright125"
            style={{ fontWeight: "600", color: "lightgray" }}
          >
            Terms
          </span>
        </span>
      </div>
    </div>
  );
}
