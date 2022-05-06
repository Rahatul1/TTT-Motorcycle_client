import React from "react";
import { Button } from "react-bootstrap";

const Inventory = ({ inventory }) => {
  const { name, img, discription, price, quantity, sold } = inventory;
  return (
    <div className="g-2 pb-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card-group">
        <div className="card">
          <img
            src={img}
            className="card-img-top w-50 mx-auto justify-center"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <h5 className="card-title">Price: {price}</h5>
            <p className="card-text">
              <b>discription</b> : {discription}
            </p>
            <p className="card-text">
              <b>quantity</b> : {quantity}
            </p>
            <p className="card-text">
              <b>Sold</b> : {sold}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <Button className="btn btn-dark w-100">Butoon</Button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
