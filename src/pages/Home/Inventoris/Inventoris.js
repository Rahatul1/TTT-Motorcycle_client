import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
// import "./inventoris.css";

const Inventoris = () => {
  const [inventoris, setInventoris] = useState([]);
  useEffect(() => {
    fetch("bike.json")
      .then((res) => res.json())
      .then((data) => setInventoris(data));
  }, []);
  return (
    <div id="inventoris" className="container">
      <h2 className="text-center py-5">Inventoris :{inventoris.length}</h2>
      <div className="inventoris-part row">
        {inventoris.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventoris;
