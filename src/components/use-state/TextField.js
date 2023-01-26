import React, { useState } from "react";

function TextField() {
  const [text, setText] = useState("hello world");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setText("hello world");
        }}
      >
        Reset
      </button>
    </form>
  );
}

export { TextField };
