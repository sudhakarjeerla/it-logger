import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="col-md-4">
        <div className="logo">
          <Link exact to="/">
            <img src="https://www.freepnglogos.com/uploads/pubg-png/home-pubg-skins-21.png" />
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <ul>
          <li><Link exact="true" to="./">Home</Link></li>
          <li><Link to="/viewlogs">Logs</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
