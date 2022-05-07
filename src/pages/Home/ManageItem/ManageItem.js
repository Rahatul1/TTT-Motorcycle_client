import React from "react";
import useProducts from "../../Hooks/useProducts";

import "./manageItem.css";

const ManageItem = () => {
  const [products] = useProducts();
  return (
    <div className="container pt-3">
      <h2 className="text-center pb-4">Manage Product: {products.length}</h2>
      <table className="manage-part text-center py-5" style={{ width: "100%" }}>
        {products.map((product) => (
          <div className="b-5" key={product._id}>
            <tr>
              <th style={{ width: "10%" }}>Name</th>
              <th style={{ width: "10%" }}>Image</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
            <tr>
              <td>{product.name}</td>
              <td>
                <img className="w-25" src={product.img} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn shadow text-danger">Delete item</button>
              </td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

export default ManageItem;
