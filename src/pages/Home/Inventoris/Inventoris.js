import useProducts from "../../Hooks/useProducts";
import Inventory from "../Inventory/Inventory";
import NewProducts from "../NewProducts/NewProducts";
// import "./inventoris.css";

const Inventoris = () => {
  const [inventoris] = useProducts();

  return (
    <div id="inventoris" className="container">
      <h2 className="text-center py-5">Most Motor Bike :{inventoris.length}</h2>
      <div className="inventoris-part row">
        {inventoris.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <NewProducts></NewProducts>
    </div>
  );
};

export default Inventoris;
