import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restuarant Container
 *    - Restuarant Cards
 *       - Img
 *       - Name of the res, Rating, cuising, Delivery time
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6sqCgIRQ2UkoQkEsa4B43UVgUjovsEf2wg&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// we can give inline style as well but first need to create a js object, and then add it to jsx, how as js gets added in jsx? using{}
// but inline style is not a preferred way.
const style = {
  background: "#f0f0f0",
};

const RestuarantCards = (props) => {
  return (
    <div className="res-cards" style={style}>
      <img
        className="food-logo"
        alt="Meghna Biryani"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/46463436B.png"
      />
      <div className="food-details">
        <div className="food-title">{props.resName}</div>
        <div className="food-subTitle"> {props.cuisine}</div>
        <div className="food-Rating">4.2</div>
        <div className="delivery-Time"> 20 mins</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarantCards
          resName="HSR High Street"
          cuisine="Dum Biryani, Chicken Dosa"
        />
        <RestuarantCards resName="KFC" cuisine="Burgur, Pizza" />
        <RestuarantCards resName="Udupi Palace" cuisine="Idli, Tea, Dosa" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
