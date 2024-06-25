const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Sibling 1!"),
    React.createElement("h1", { id: "heading2" }, "Sibling 2"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); //craeteRppt assigns the root for React.
root.render(parent); // here render replace the element alraedy present in the root, not append but replace

// React only works inside root, thats why its a library, react can work in small piece of appliactiona nd in large also
// parent is a object.
// so React.craeteElement creates a object(child sibling parant all is object),which is a react element that gets converted to HTML, that browser understands
// we know that html elemnt has a tree structue so how we can create that in React.
/**
 * <div>
 *   <div>
 *     <h1><h1/>
 *   </div>
 * <div>
 */
// if i have to create a sibling, i need a array
// creating the element with this way will create a complex code and not readable, Yes the above is the code of React.
// but we are not going to use createElement of the raect, we will use JSX.
