import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div style={{ height: "400px" }} className="w-100 text-center pt-5">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
