import React, { useState } from "react";

function FormObject() {
  const [form, setForm] = useState({
    firstName: "Van",
    lastName: "Tran",
    email: "trantuvan@gmail.com",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      ...{ [name]: value },
    }));
  };

  const { firstName, lastName, email } = form;
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor="firstName">
        First name:{" "}
        <input
          type="text"
          name="firstName"
          id="first-name"
          value={firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="lastName">
        Last name:{" "}
        <input
          type="text"
          name="lastName"
          id="last-name"
          value={lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        email:{" "}
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <p>
        {firstName} {lastName} ({email})
      </p>
    </form>
  );
}

export { FormObject };
