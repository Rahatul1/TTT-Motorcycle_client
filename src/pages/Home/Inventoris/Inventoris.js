import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Accessories from "../Accessories/Accessories";
import Inventory from "../Inventory/Inventory";
import NewProducts from "../NewProducts/NewProducts";
// import "./inventoris.css";

const Inventoris = () => {
  const [inventoris] = useProducts();

  return (
    <div id="inventoris" className="container">
      <h2 className="text-center py-5">Most Motor Bike :{inventoris.length}</h2>
      <div className="inventoris-part row">
        {inventoris.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <Link to={"/manageItem"}>
        <button className="btn btn-dark">See More</button>
      </Link>
      <NewProducts></NewProducts>
      <Accessories></Accessories>
    </div>
  );
};

export default Inventoris;
