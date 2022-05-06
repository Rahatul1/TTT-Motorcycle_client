import React from "react";
import "./footer.css";
import facebook from "../../../Images/icon/facebook.png";
import linkedin from "../../../Images/icon/linkedin.png";
import twitter from "../../../Images/icon/twitter.png";
import global from "../../../Images/icon/global.png";

const Footer = () => {
  const currentDate = new Date();
  return (
    <div className="foter-header py-3">
      <div className="text-center">
        <div className="py-3 px-5 footer-content">
          <div className="d-flex component">
            <h6>Home</h6>
            <h6>Inventory</h6>
            <h6>Blogs</h6>
            <h6>About</h6>
          </div>
          <div className="images-icon">
            <img className="px-2" src={facebook} height="30px" alt="" />
            <img className="px-2" src={linkedin} height="30px" alt="" />
            <img className="px-2" src={twitter} height="30px" alt="" />
            <img className="px-2" src={global} height="30px" alt="" />
          </div>
        </div>
        <p>
          Copyright &copy; {currentDate.getFullYear()} | All rights Reserved by
          Motor Bikes Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
