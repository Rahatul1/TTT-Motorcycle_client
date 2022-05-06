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

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  //createUser
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

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
    toast("Updated Profile");
    navigate("/home");
  };

  // loading or updating
  if (loading || updating) {
    <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
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
    </div>
  );
};

export default Register;

/* import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  //register criate
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  // updateProfile
  const [updateProfile, updating] = useUpdateProfile(auth);

  //submit ragister
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password, name);
    await updateProfile({ displayName: name });
    toast("Updated Profile");
    navigate("/home");
  };

  // loading or updating
  if (loading || updating) {
    <Loading></Loading>;
  }
  // home tranpar
  if (user) {
    navigate("/home");
  }

  //navigate
  const navigatRegister = () => {
    navigate("/register");
  };
  return (
    <div className="w-50 mx-auto pt-5">
      <Form onSubmit={handleRegister}>
        <h2 className="text-dark text-center mt-3">Pleace Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
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
            className={`ps-2 pb-4 ${agree ? "" : "text-danger"}`}
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
          onClick={navigatRegister}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
 */
