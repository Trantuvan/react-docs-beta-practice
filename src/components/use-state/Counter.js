import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button style={{ fontSize: "20px" }} onClick={handleClick}>
      You press me {count} times
    </button>
  );
}

export { Counter };
