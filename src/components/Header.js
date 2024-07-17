// Named Import
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, LOGO_NAME } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <a href="/">Home</a>
            {/**here whole page gets reloads so don't use anchor tag alway use link */}
          </li>
          <li>
            <Link to="/about">About us</Link>
            {/**here onlt the component which is getting called via path is getting refreshed */}
          </li>
          <li>
            <Link to="/contact"> Contact us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
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
