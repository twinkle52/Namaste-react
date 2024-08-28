import React, { useRef, useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Current count: {count}
      </p>
      <p>Previous count: {prevCount}</p>
    </div>
  );
}
export default Example;
