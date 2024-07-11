// Named Import
import { useState } from "react";
import { LOGO_URL, LOGO_NAME } from "../utils/constants";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <div className="company-logo-name">
        <div className="logo-name">{LOGO_NAME}</div>
        <div className="logo-container">
          <img className="logo-image" src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
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
