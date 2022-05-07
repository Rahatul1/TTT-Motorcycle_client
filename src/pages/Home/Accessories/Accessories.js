import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Accessories = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("Accessories.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center py-3">YAMAHA PARTS & ACCESSORIES</h2>
      <div className="row">
        {parts.map((part) => (
          <div key={part.id} className="col-sm-4">
            <Card className="m-3 rounded shadow" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={part.image} />
              <Card.Body>
                <Card.Title>{part.name}</Card.Title>
                <Card.Text>
                  <b>Discription: </b>
                  {part.info}
                </Card.Text>
                <Button variant="dark">ACCESSORIES</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
