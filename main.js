import React from "react"; // importing React from node modules
import ReactDOM from "react-dom/client"; // in the index.html adding type as module because it was giving error as
// "Browser scripts cannot have imports or exports."
// browser is taking the script as normal browser script. write module so that browser can consider it as module.
//Now our react will come from node modules
//    <script type= "modules" src="./main.js"></script>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Sibling 1"),
    React.createElement("h1", { id: "heading2" }, "Sibling 2"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
