import React from "react";

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label htmlFor={artwork.title}>
            <input
              type="checkbox"
              name={artwork.title}
              id={artwork.title}
              checked={artwork.seen}
              onChange={(e) => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
