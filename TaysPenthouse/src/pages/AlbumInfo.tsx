import Oldwork from "../components/Oldwork";
import InfoUpdate from "../components/InfoUpdate";
import NewWork from "../components/NewWork";
import { useState } from "react";

export default function AlbumInfo() {
  const [content, setContent] = useState(
    <img id="startingGIF" src="/Miscellaneous/unicornCat.gif" />
  );
  return (
    <div>
      <Oldwork callback={setContent} />
      <InfoUpdate content={content} />
      <NewWork callback={setContent} />
    </div>
  );
}
