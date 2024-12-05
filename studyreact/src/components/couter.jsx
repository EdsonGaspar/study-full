import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <input
        type="button"
        value="Increments"
        onClick={increment}
        className="btn"
      />
    </>
  );
}
