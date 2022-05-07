import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../Hooks/useProducts";

const ProductsDetail = () => {
  const { id } = useParams();
  const [updateQuantity, setUpdateQuantity] = useState(0);
  const [products, setProducts] = useProducts({});

  useEffect(() => {
    const url = `http://localhost:5000/produts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, updateQuantity]);

  //dalivay
  const handleDalivar = (id) => {
    console.log(id);
    const url = `http://localhost:5000/produts/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(data.msg);
      });
  };

  // quantity add
  const handleQuantityAdd = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    setUpdateQuantity(quantity);
    const quantityNum = {
      quantity: quantity,
    };
    const url = `http://localhost:5000/ProductsDetail/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantityNum),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast(data.msg);
      });
  };

  //
  const handleReset = () => {
    document.querySelectorAll("input");
    this.setState({
      itemvalues: [{}],
    });
  };
  return (
    <div>
      <div className="text-center">
        <Card className=" mx-auto mt-4" style={{ width: "30rem" }}>
          <Card.Img className="w-25 mx-auto" variant="top" src={products.img} />
          <Card.Body>
            <Card.Title>Name: {products.name}</Card.Title>
            <Card.Text>
              <b>PRice</b>: {products.price}
            </Card.Text>
            <Card.Text>
              <b>Discription:</b> {products.discription}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <b>Quantity</b>: {products.quantity}
            </ListGroupItem>
            <ListGroupItem>
              <b>Sold</b>: {products.sold}
            </ListGroupItem>
            <ListGroupItem>
              <b>Supplier</b>: {products.supplier}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <button
              className="btn btn-dark w-50"
              onClick={() => handleDalivar(products._id)}
            >
              Delivery
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="text-center border border-1 p-5 border-dark m-3">
        <form onSubmit={handleQuantityAdd} className="py-5">
          <input
            onSubmit={handleReset}
            className="w-25"
            type="text"
            name="quantity"
            id=""
            placeholder="Add Quantity"
          />
          <br />
          <input
            className="btn btn-dark mt-3"
            type="submit"
            value="Add Quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default ProductsDetail;
