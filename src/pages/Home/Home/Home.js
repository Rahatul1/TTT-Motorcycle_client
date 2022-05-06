import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Inventoris from "../Inventoris/Inventoris";
import "./home.css";

const Home = () => {
  return (
    <div className="home-part">
      <Banner></Banner>
      <Inventoris></Inventoris>
      <Footer></Footer>
    </div>
  );
};

export default Home;
