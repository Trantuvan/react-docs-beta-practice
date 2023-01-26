import React from "react";
import { useImmer } from "use-immer";
import ItemList from "./ItemList";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

function ApplyImmer() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artWorkId, nextSeen) {
    updateList((draft) => {
      const artwork = draft.find((artwork) => artwork.id === artWorkId);
      //*Immer help to write mutable declaration
      artwork.seen = nextSeen;
    });
  }

  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My List of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </div>
  );
}

export default ApplyImmer;
