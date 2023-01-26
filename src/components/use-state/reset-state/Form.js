import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("Taylor");
  return (
    <form style={{ paddingTop: "4px" }}>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </form>
  );
}

export default Form;
