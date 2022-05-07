import React from "react";
import { toast } from "react-toastify";
import useProducts from "../../Hooks/useProducts";

import "./manageItem.css";

const ManageItem = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      //
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast("Delete Success");
        });
    }
  };

  return (
    <div className="container pt-3">
      <h2 className="text-center pb-4">Manage Product: {products.length}</h2>
      <table className="manage-part text-center mb-5" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Image</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "10%" }}>Quantity</th>
            <th style={{ width: "10%" }}>Action</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product._id}>
            <tr>
              <td>{product.name}</td>
              <td>
                <img className="w-25" src={product.img} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn shadow text-danger"
                >
                  Delete item
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageItem;
