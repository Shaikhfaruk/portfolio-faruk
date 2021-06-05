import React from "react";
import { NavLink } from "react-router-dom";

const RightSide = () => {
  return (
    <>
      <div className="RightSide" id="RightSide">
        <input type="checkbox" id="hamburger-toggle" />

        <label className="hamburger-wrapper" htmlFor="hamburger-toggle">
          <span className="hamburger"></span>
        </label>
        <div id="navlinksContainer" className="box">
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/skills"
          >
            Skills
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/teams"
          >
            Teams
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            className="navlinks"
            id="navlinks"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RightSide;
