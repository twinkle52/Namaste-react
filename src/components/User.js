import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    setCount(10);
  }
  console.log(props.name, "child component");

  useEffect(() => {
    console.log(props.name, "child useEffect");
  });
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>
        Name: {props.name} {console.log(props.name, "child return")}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>button</button>
      <h2>Location: Bangalore</h2>
      <h3>Contact: @twinkle123</h3>
    </div>
  );
};

export default User;

// this is the life cycle of functional component as well, componentDidMount and useEffect works in the same way.
//first render the component be it parent or Children, means once render phase is Batched and completed, then the commit phase is called.

// < Reconciliation diff between virtual DOm is done is a batch, once batching is done. Commit phase will run for all componet>
// About parent componet
// About.js:38 parent return

//    User.js:9 first(Class) child component
//    User.js:18 first(Class) child return

//    User.js:9 second(Class) child component
//    User.js:18 second(Class) child return

//    <below DOM UPDATES - IN SINGLE BATCH>
//    User.js:12 first(Class) child useEffect
//    User.js:12 second(Class) child useEffect

// About.js:33 parent useEffect

// Why React does that as we can see t=in the img ReactLifeCycle, in the commit phase there will be DOm manipulation,
// and DOM manipulation is very Costly and time takin. SO React in the Render phase reconciliates and find the difference
// in the virtual DOM. So it takes all the child Batched the render phase, as render phase virtual DOM manipulation, finding difference is fast
// commit phase is slow, to update the main DOM.
