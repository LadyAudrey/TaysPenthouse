type WhichAlbumsProps = {
  callback: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

export default function WhichAlbums({ callback }: WhichAlbumsProps) {
  return (
    <div className="center-me">
      <h2>Rank Taylor's songs and albums</h2>
      <h3>Select the albums below that you'd like to sort</h3>
      <div className="album-covers">
        <button
          onClick={() => {
            callback(<h2>DebutOG</h2>);
          }}
        >
          <img src="/AlbumCovers/Debut.png" className="sort-choices debutOG" />
        </button>
        <button
          onClick={() => {
            callback(<h2>FearlessTv</h2>);
          }}
        >
          <img
            src="/AlbumCovers/FearlessTV.png"
            className="sort-choices fearlessTV"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>SpeakNowTV</h2>);
          }}
        >
          <img
            src="/AlbumCovers/SpeakNowTV.jpg"
            className="sort-choices SpeakNowTV"
          />
        </button>
        <button onClick={() => callback(<h2>RedTV</h2>)}>
          <img src="/AlbumCovers/RedTV.png" className="sort-choices redTV" />
        </button>
        <button onClick={() => callback(<h2>1989TV</h2>)}>
          <img src="/AlbumCovers/1989TV.webp" className="sort-choices 1989TV" />
        </button>
        <button onClick={() => callback(<h2>ReputationOG</h2>)}>
          <img
            src="/AlbumCovers/ReputationOG.png"
            className="sort-choices reputationOG"
          />
        </button>
      </div>
      <div className="album-covers">
        <button
          onClick={() => {
            callback(<h2>Lover</h2>);
          }}
        >
          <img
            src="/Miscellaneous/crystaldress.jpg"
            className="sort-choices not-choice"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>Lover</h2>);
          }}
        >
          <img src="/AlbumCovers/Lover.png" className="sort-choices lover" />
        </button>
        <button
          onClick={() => {
            callback(<h2>Folklore</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Folklore.png"
            className="sort-choices folklore"
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
            className="sort-choices evermore"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>Midnights</h2>);
          }}
        >
          <img
            src="/AlbumCovers/Midnights.png"
            className="sort-choices midnights"
          />
        </button>
        <button
          onClick={() => {
            callback(<h2>I'm not an album, just Taylor being cute</h2>);
          }}
        >
          <img
            src="/Miscellaneous/taythumb.png"
            className="sort-choices not-choice"
          />
        </button>
      </div>
      <button>Ready For It</button>
    </div>
  );
}
