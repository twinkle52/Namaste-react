import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import AccordianList from "./AccordianList";

const Cart = () => {
  // we can sdo this as well, but this is less efficient,we know that any slice gets changed in the store, the store will get updated and here we are fetching everything, every slice say user, cart, whislist. that will non-optimised
  // so always subscribe/select for the slice we want
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  // read the store to get the cartItems
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-centre m-4 p-4">
      {cartItems.length === 0 ? (
        <div className="emptyCartDisplay w-64 h-64 mx-auto flex flex-col items-center justify-center gap-5 m-24">
          <img
            className="w-64 h-64"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="Empty Cart"
          />
          <h1 className="text-center text-lg font-semibold text-gray-700">
            There are no items in the cart
          </h1>
          <Link to="/">
            <button className="m-2 p-2 bg-green-400 text-white rounded-xl">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-end ">
          <button
            className="m-2 p-2 bg-black text-white rounded-xl"
            onClick={handleClearItem}
          >
            Clear Cart
          </button>
        </div>
      )}

      <h1 className="text-2xl font-bold"></h1>
      {console.log(
        "we can use list to show to cart as well, reusing the component and used addButton condition to not the the add button in the cart"
      )}
      <div>
        <AccordianList itemCards={cartItems} addButton={false} />
      </div>
    </div>
  );
};

export default Cart;
