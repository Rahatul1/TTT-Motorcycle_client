import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/produts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <h2>products</h2>
    </div>
  );
};

export default ProductsDetail;
