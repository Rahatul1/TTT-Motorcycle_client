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
      <div className="m-5">
        <div className="d-flex products">
          <img className="rounded-lg" src={img1} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg" src={img2} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg" src={img3} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg" src={img4} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg" src={img5} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
        <div className="d-flex products">
          <img className="rounded-lg" src={img6} alt="" />
          <div className="mx-5">
            <h4 className="pt-4">All-new XSR900: Legend Reborn</h4>
            <p>Yamaha Ultimate Faster Son</p>
            <button className="btn btn-dark">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
