type NewWorkProps = {
  callback: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

export default function NewWork({ callback }: NewWorkProps) {
  return (
    <div>
      <h2>These albums were released after she left her record label</h2>
      <h3>
        Because she released them under a new record label, she was able
        negotiate the terms to her liking and considers them to be legally her
        property.
      </h3>
      <div className="album-covers">
        <button
          onClick={() => {
            callback(<h2>Lover</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Lover.png"
            id="lover"
            className="album-cover"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>Folklore</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Folklore.png"
            id="folklore"
            className="album-cover"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>Evermore</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Evermore.png"
            id="evermore"
            className="album-cover"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>Midnights</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Midnights.png"
            id="midnights"
            className="album-cover"
          />
        </button>
      </div>
    </div>
  );
}
