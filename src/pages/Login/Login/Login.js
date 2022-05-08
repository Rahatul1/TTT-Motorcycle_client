import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
// import axios from "axios";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordlRef = useRef("");
  const location = useLocation();

  //reset-passwword
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // sign in
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //
  const [token] = useToken(user);

  //-----locathin proceed-------//
  let from = location.state?.from?.pathname || "/";

  // login
  const handleLoginFrom = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordlRef.current.value;

    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post(
    //   "https://guarded-fjord-51404.herokuapp.com/login",
    //   { email }
    // );
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
  };

  //error
  if (error?.message) {
    toast("Wrong Type");
  }

  //loading
  if (loading || sending) {
    <Loading></Loading>;
  }

  //navigate
  if (token) {
    navigate(from, { replace: true });
  }

  //reset-passeord
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("please Enter your Email");
    }
  };

  //navigate
  const navigatelogin = () => {
    navigate("/register");
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-dark text-center mt-3">Pleace Login</h2>
      <Form onSubmit={handleLoginFrom}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            requireds
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordlRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
      <p className="pt-3">
        New User A -
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigatelogin}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password?--
        <button
          className="text-danger pe-auto btn btn-link text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
