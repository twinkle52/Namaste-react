import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    setCount(10);
  }
  useEffect(() => {});
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Name: {props.name}</h1>
      <button onClick={() => setCount((count) => count + 1)}>button</button>
      <h2>Location: Bangalore</h2>
      <h3>Contact: @twinkle123</h3>
    </div>
  );
};

export default User;
