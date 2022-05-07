import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ProductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useProducts({});

  useEffect(() => {
    const url = `http://localhost:5000/produts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

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
            <button className="btn btn-dark w-50">Delivery</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductsDetail;
