import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  // so first the component will be rendered then count will be 0 it will see that setCount is called and now the value of count will be 10
  // so first the componet along with the jsx will be executed that time the count is 0, that time React schedules an update Count to 10 and re-renders the component.
  // it happens so fast that count will be visible as 10
  // component renders -> count=0 -> jsx renders -> react has schedule count as 10-> component rerenders with jsx.
  if (count === 5) {
    setCount(10);
  }
  console.log("after setCount");
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h1>
        Name: {props.name} {console.log("welcome to jsx")}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>button</button>
      {console.log(count)}
      <h2>Location: Bangalore</h2>
      <h3>Contact: @twinkle123</h3>
    </div>
  );
};

export default User;
