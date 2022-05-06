import React from "react";
import Banner from "../Banner/Banner";
import Inventoris from "../Inventoris/Inventoris";
import "./home.css";

const Home = () => {
  return (
    <div className="home-part">
      <Banner></Banner>
      <Inventoris></Inventoris>
    </div>
  );
};

export default Home;
