import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL, LOGO_NAME } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // cart Subscribing to the store using a Selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItems, "cartItems"); // items will get added in an array

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/"); // Navigate to the home route
    window.location.reload(); // Reload the page
  };

  return (
    <div
      className={`header flex justify-between items-center px-4 py-2 shadow-lg ${
        isDarkMode ? "bg-green-700" : "lg:bg-green-50"
      }`}
    >
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
          <Link to="/cart">
            <li className="px-3 font-bold">Cart- ({cartItems.length})</li>
          </Link>
          <button
            className="px-5 border border-green-600"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="px-3">{loggedInUser}</li>
        </ul>
        <div>
          <button
            className={`px-2 py-2 ml-4 border rounded text-white hover:cursor-pointer focus:outline-none ${
              isDarkMode ? "bg-transparent" : "bg-black"
            }`}
            onClick={toggleTheme}
          >
            {isDarkMode ? " ☀️ " : " 🌙 "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
