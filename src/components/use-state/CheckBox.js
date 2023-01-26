import React, { useState } from "react";

function Checkbox() {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <div>
      <form>
        <label htmlFor="liked">
          <input
            type="checkbox"
            name="liked"
            id="liked"
            checked={liked}
            onChange={handleChange}
          />
          I liked this
        </label>
      </form>
      <p>{liked ? "You liked this." : "You did not like this."}</p>
    </div>
  );
}

export { Checkbox };
