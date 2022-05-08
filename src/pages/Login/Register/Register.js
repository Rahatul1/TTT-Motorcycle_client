import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  //createUser
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  //
  const [token] = useToken(user);

  //updateProfile
  const [updateProfile, updating] = useUpdateProfile(auth);

  //register
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password, name);
    await updateProfile({ displayName: name });
    toast("Reagister success");
    // navigate("/home");
  };
  //
  if (token) {
    navigate("/home");
  }

  // loading or updating
  if (loading || updating) {
    <Loading></Loading>;
  }

  //navigate
  const navigateRegister = () => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-dark text-center mt-3">Pleace Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group
          onClick={() => setAgree(!agree)}
          className="mb-3"
          name="trams"
          id="trams"
          type="checkbox"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            htmlFor="trams"
            className={`ps-2 pb-2 ${agree ? "" : "text-danger"}`}
            label="Check me out"
          />
        </Form.Group>
        <Button disabled={!agree} variant="dark" type="submit">
          Register
        </Button>
      </Form>
      <p className="pt-3">
        All Ready Register To -
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
