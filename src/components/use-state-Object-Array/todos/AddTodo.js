import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("Adding");
        setTitle("");
        onAddTodo(title);
      }}
    >
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
