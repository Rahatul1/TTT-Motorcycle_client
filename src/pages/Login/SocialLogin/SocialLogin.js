import React from "react";
import google from "../../../Images/google.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //google sign
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);

  //
  let from = location.state?.from?.pathname || "/";

  //
  let errorElement;
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  //-------------------//
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="pt-2 px-4">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="pb-5">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark  mx-lg-auto d-block my-3"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
