import { createSlice, current } from "@reduxjs/toolkit"; // again see createSlice will be imported from toolkit as toolkit lib is concer with the redux work

// creating slice for store, slice take name, initialState of the slice and reducers(funtions).
// reducers will have objects action(here addItem) mapped to reducer function (initialState, action) => {} which will modify the store.
// so reducer will modify our state w.r.t action
// here action is when we add item we will get data a item a payload so that will be dispatched by reducer and set to state.
// here createSlice will return object of action and resucers in cartSlice, and that we are going to export.
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // we are mutating the state here // an operation that changes the value of an existing object
    // Actually we have to mutate/ Redux toolkit handle the creating of new state and follows the immutable, immer library helps here.
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(); //just popping out the last value from the array, we can check the index of the cart find the value and then remove as per logic, this is now done for simplicity.
    },
    // RTK -> says either mutate the state or return a new state.
    //originalstate {items:[pizza] => []}
    clearCart: (state) => {
      console.log(current(state)); // to read the state in console
      // state = [] // this will not change/mutate the original state, reference will be changed from originalstate {items:[pizza]} => {items:[]}, but originalstate {items:[pizza]} is original state and that will not mutate
      // below will help to mutate the original state
      //  use -> state.items.length = 0; // originalstate {items:[pizza]} => {items: []} or below return
      return { items: [] }; // this NEW object will replace inside the original state {items:[]}
    },
  },
});
console.log("in the slice");
export const { addItem, removeItem, clearCart } = cartSlice.actions; // taking out on fly
export default cartSlice.reducer;

// cartSlice = {
//     action:{
//         addItem, removeItem, clearCart
//     },
//     reducer{

//     }
// } // this will be structuture of cartSlice
