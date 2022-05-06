import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //navigate
  const navigatelogin = () => {
    navigate("/register");
  };
  return (
    <div className="w-50 pt-5 mx-auto">
      <h2 className="text-dark text-center mt-3">Pleace Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
      <p className="pt-3">
        New User A -
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigatelogin}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
