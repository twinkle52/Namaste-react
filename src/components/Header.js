import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL, LOGO_NAME } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/"); // Navigate to the home route
    window.location.reload(); // Reload the page
  };

  return (
    <div className="header flex justify-between items-center px-4 py-2 shadow-lg lg:bg-green-50">
      <Link to="/" onClick={handleHomeClick}>
        <div className="company-logo-name-container flex items-center transition-transform transform hover:scale-105">
          <img
            className="logo-image w-14 m-4"
            src={LOGO_URL}
            alt="Company Logo"
          />
          <div className="logo-name text-lg font-semibold">{LOGO_NAME}</div>
        </div>
      </Link>
      <div className="nav-items flex items-center">
        <ul className="header-nav-items flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">Cart</li>
          <button
            className="px-5 border border-green-600"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
