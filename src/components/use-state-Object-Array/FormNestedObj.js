import React, { useState } from "react";
import img from "img/art.jpg";

function FormNestedObj() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: img,
    },
  });

  const handleChange = (e) => {
    const evtName = e.target.name;
    const value = e.target.value;

    switch (evtName) {
      case "name":
        setPerson((prevPerson) => {
          return {
            ...prevPerson,
            [evtName]: value,
          };
        });
        break;

      default:
        setPerson((prevPerson) => {
          const { artwork } = prevPerson;
          return {
            ...prevPerson,
            artwork: {
              ...artwork,
              ...{ [evtName]: value },
            },
          };
        });
        break;
    }
  };

  const {
    name,
    artwork: { title, city, image },
  } = person;

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor="name">
        Name:{" "}
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="title">
        Tilte:{" "}
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="city">
        City:{" "}
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="image">
        Image:{" "}
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleChange}
        />
      </label>
      <p>
        <i>{title}</i>
        {" by "}
        {name}
        <br />
        (located in {city})
      </p>
      <img src={image} alt={title} />
    </form>
  );
}

export { FormNestedObj };
