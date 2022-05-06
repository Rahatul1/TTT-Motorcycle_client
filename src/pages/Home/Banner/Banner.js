import React from "react";
import image from "../../../Images/images.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="images-part pt-5">
          <img src={image} className="rounded" alt="..." />
        </div>
        <div className="banner-part ">
          <h1>TTT Motorcycle Village</h1>
          <p>
            We have a huge range of top brands and plenty of motorbikes for you
            to check out! Ranging across Kawasaki, Honda, Yamaha, Royal Enfield
            and more. As well as Dyno testing, Tuning and Modding, we have MOT
            centres along with fully stocked motorcycle showrooms at both
            stores!!
          </p>
          <button className="btn btn-info">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
