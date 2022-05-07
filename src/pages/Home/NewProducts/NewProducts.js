import React from "react";
import "./NewProducts.css";
import img1 from "../../../Images/newBike/img1.jpg";
import img2 from "../../../Images/newBike/img2.jpg";
import img3 from "../../../Images/newBike/img3.jpg";
import img4 from "../../../Images/newBike/img4.jpg";
import img5 from "../../../Images/newBike/img5.jpg";
import img6 from "../../../Images/newBike/img6.jpg";

const NewProducts = () => {
  return (
    <div>
      <h2 className="text-center py-3">YAMAHA LATEST NEWS</h2>
      <div className="m-5 mx-auto">
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img1} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">2021 MT-09 SP</h4>
            <p>The most radical Yamaha Hyper Naked</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img2} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">TRACER 7 GT</h4>
            <p>Joins Sport Touring line-up for 2021</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img3} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">2021 TRACER 9 and TRACER 9 GT</h4>
            <p>More power, less weight and increased versatility</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img4} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">2021 NMAX and D'elight:</h4>
            <p>Yamaha offers everyone a smarter way to move</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img5} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">New Yamaha R7</h4>
            <p>Where R/World meets yours</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg w-25" src={img6} alt="" />
          <div className="mx-5">
            <h4 className="pt-5">Free NIKEN Sport Accessory Pack</h4>
            <p>with a total retail value of £3,602</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
