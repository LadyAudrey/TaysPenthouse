import { useState } from "react";
import WhichAlbums from "../components/WhichAlbums";

export default function SongSorter() {
  const [toSort, setToSort] = useState(
    <img className="startingGIF" src="/Miscellaneous/unicornCat.gif" />
  );
  return (
    <div>
      // starts out with the album pics, and text explaining to click on the
      albums that you want to sort
      <WhichAlbums callback={setToSort} />
      // changes to a page component with buttons holding song names that update
      the logic
    </div>
  );
}
