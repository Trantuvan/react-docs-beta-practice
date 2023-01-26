import React, { useState } from "react";

function Form2Var() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setAge((prevAge) => prevAge + 1);
        }}
      >
        Increment age
      </button>
      <p>
        Hello, {name}. You are {age}
      </p>
    </div>
  );
}

export { Form2Var };
