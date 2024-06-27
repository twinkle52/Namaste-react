import React from "react";
import ReactDOM from "react-dom/client";

// We can write normal function as well just add return even if its has single line of code
const TitleJSX = function () {
  return <h1 className="heading">Hello From JSX</h1>;
};

const reactElementJSX = <h1>JS variable</h1>;

const num = 20;
// This is componenet componsition, componenet inside componenet
const HeadingComponentJSX = () => (
  <div id="container">
    <TitleJSX />
    <TitleJSX></TitleJSX>
    {TitleJSX()}
    {console.log("Any JS code will work inside JSX")}
    {100}
    {"Hi there"}
    {100 * 10}
    <h1>{"I can be inside the tag"}</h1>
    {reactElementJSX}
    {num}
    <h1 className="heaidng">Namaste React Fucntional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponentJSX />);

{
  /* <TitleJSX />
<TitleJSX></TitleJSX>
{TitleJSX()} calling js function from jsx
Above three will return same thing they are same. */
}
