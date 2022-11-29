import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="topRight">
          <img
            className="topImg"
            src="https://cdn3.vectorstock.com/i/1000x1000/69/02/corona-virus-a-microorganism-covid-19-h1n1-vector-29916902.jpg"
            alt=""
          />
        </div>
        <p className="head">
          Word Wide<span> COVID-19</span> Tracker
        </p>
        <div className="link">
          <NavLink
            exact
            activeClassName="active_class"
            className="linkItem"
            to="/"
          >
            {"Global"}
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="linkItem"
            to="/India"
          >
            {"India"}
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="linkItem"
            to="/About"
          >
            {"About"}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
