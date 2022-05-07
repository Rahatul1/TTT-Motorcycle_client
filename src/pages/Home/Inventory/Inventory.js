import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = ({ inventory }) => {
  const { _id, name, img, discription, price, quantity, sold, supplier } =
    inventory;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

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
            <h5 className="card-title text-center pb-3">{name}</h5>
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
            <p className="card-text">
              <b>Supplier</b> : {supplier}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <>
                <Button
                  onClick={() => navigateToProductDetail(_id)}
                  className="btn btn-dark w-100"
                >
                  Update
                </Button>
              </>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
