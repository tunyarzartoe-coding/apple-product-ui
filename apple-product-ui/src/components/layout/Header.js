import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/iTrend-logo.png";
import User from "../assets/images/user-bg.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AppleIcon from "@mui/icons-material/Apple";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  return (
    <>
      <div className={`side-bar ${isSidebarActive ? "active" : ""}`}>
        <div
          id="close-side-bar"
          className="fas fa-times"
          onClick={closeSidebar}
        ></div>

        <div className="user">
          <img src={User} alt="user logo" />
          <h3 style={{ paddingLeft: "3rem" }}>Your Name</h3>
          <Link to="#" style={{ paddingLeft: "3rem" }}>
            <LogoutIcon style={{ fontSize: "2.7rem" }} /> Log Out
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/" onClick={toggleSidebar}>
            {" "}
            <HomeRoundedIcon style={{ fontSize: "3rem" }} /> home{" "}
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            {" "}
            <InfoRoundedIcon style={{ fontSize: "3rem" }} /> about{" "}
          </Link>
          <Link to="/menu" onClick={toggleSidebar}>
            {" "}
            <AppleIcon style={{ fontSize: "3rem" }} /> products{" "}
          </Link>
          <Link to="/contact" onClick={toggleSidebar}>
            {" "}
            <ContactSupportIcon style={{ fontSize: "3rem" }} /> contact{" "}
          </Link>
          <Link to="/login" onClick={toggleSidebar}>
            {" "}
            <LoginIcon style={{ fontSize: "3rem" }} /> login{" "}
          </Link>
          <Link to="/cart" onClick={toggleSidebar}>
            {" "}
            <AddShoppingCartIcon style={{ fontSize: "3rem" }} /> cart{" "}
          </Link>
        </nav>
      </div>

      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <img src={Logo} alt="" style={{ width: "80px", height: "60px" }} />
        </Link>

        <div className="search-form">
          <input type="text" placeholder="search here..." style={{border: "none"}} />
          <label className="fas fa-search"></label>
        </div>

        <div className="icons">
          <div
            id="menu-btn"
            className="fas fa-bars"
            onClick={toggleSidebar}
          ></div>
          <div id="search-btn" className="fas fa-search"></div>
          <Link to="login.html" className="fas fa-user"></Link>
          <Link to="#" className="fas fa-heart"></Link>
          <Link to="/cart" className="fas fa-shopping-cart"></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
