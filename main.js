import React from "react";
import ReactDOM from "react-dom/client";

// jsx is HTML like syntax, JSX is different just like js, HTML and React is different.

// JSX => React.creatElement => reactElemnt is JS object => HTML element when render
// we add bracket so that babel understands the begin and end of the jsx
const jsxHeading = <h1 className="heading">Hello From JSX</h1>; // both Parent and jsxHeading is a object, so both the code are equivalent.
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); // rendering means replacing not appending

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading1" }, "Sibling 1"),
//     React.createElement("h1", { id: "heading2" }, "Sibling 2"),
//   ])
// );
// console.log(parent);
