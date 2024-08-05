import { configureStore } from "@reduxjs/toolkit"; // configureStore is a imported by toolkit as this library has to do with only redux,connection with react will be handled by react-redux library.
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("in the app store");

export default appStore;

// reducer(Big Storage) in appStore => reducers(small object in slice)

// Each slice will have its own reducers, so the object reducer will be the big reducer for our app and the cartslice reducer will be the object of that big reducer
// say there is a imaginary reducer storage and when we keep creating the slice reducer, it gets added to big reducer like a object.
