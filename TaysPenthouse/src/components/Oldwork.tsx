type OldworkProps = {
  callback: React.Dispatch<React.SetStateAction<JSX.Element>>;
};

export default function Oldwork({ callback }: OldworkProps) {
  return (
    <>
      <div className="albumCovers">
        <div className="albumPair">
          <button
            onClick={() => {
              callback(<h2>DebutOG</h2>);
            }}
          >
            <img
              src="/AlbumCovers/Debut.png"
              id="debutOG"
              className="album-cover"
            />
          </button>
          <button
            onClick={() => {
              callback(<h2>DebutTS</h2>);
            }}
          >
            <img
              src="/Miscellaneous/TS_Question.svg"
              className="album-cover question"
              id="TSTV"
            />
          </button>
        </div>
        <div className="albumPair">
          <button
            onClick={() => {
              callback(<h2>FearlessOG</h2>);
            }}
          >
            <img
              src="/AlbumCovers/FearlessOG.jpg"
              className="album-cover"
              id="fearlessOG"
            />
          </button>
          <button
            onClick={() => {
              callback(<h2>FearlessTv</h2>);
            }}
          >
            <img
              src="/AlbumCovers/FearlessTV.png"
              className="album-cover"
              id="fearlessTV"
            />
          </button>
        </div>
        <div className="albumPair">
          <button
            onClick={() => {
              callback(<h2>SpeakNowOG</h2>);
            }}
          >
            <img
              src="/AlbumCovers/SpeakNowOG.jpeg"
              className="album-cover"
              id="SpeakNowOG"
            />
          </button>
          <button
            onClick={() => {
              callback(<h2>SpeakNowTV</h2>);
            }}
          >
            <img
              src="/AlbumCovers/SpeakNowTV.jpg"
              className="album-cover"
              id="SpeakNowTV"
            />
          </button>
        </div>
        <div className="albumPair">
          <button
            onClick={() => {
              callback(<h2>RedOg</h2>);
            }}
          >
            <img
              src="/AlbumCovers/RedOG.png"
              className="album-cover"
              id="redOG"
            />
          </button>
          <button onClick={() => callback(<h2>RedTV</h2>)}>
            <img
              src="/AlbumCovers/RedTV.png"
              className="album-cover"
              id="redTV"
            />
          </button>
        </div>
        <div className="albumPair">
          <button onClick={() => callback(<h2>1989OG</h2>)}>
            <img
              src="/AlbumCovers/1989OG.jpg"
              className="album-cover"
              id="1989OG"
            />
          </button>
          <button onClick={() => callback(<h2>1989TV</h2>)}>
            <img
              src="/AlbumCovers/1989TV.webp"
              className="album-cover"
              id="1989TV"
            />
          </button>
        </div>
        <div className="albumPair">
          <button onClick={() => callback(<h2>ReputationOG</h2>)}>
            <img
              src="/AlbumCovers/ReputationOG.png"
              className="album-cover"
              id="reputationOG"
            />
          </button>
          <button onClick={() => callback(<h2>ReputationTV</h2>)}>
            <img
              src="/Miscellaneous/TS_Question.svg "
              className="album-cover"
              id="reputationTV"
            />
          </button>
        </div>
      </div>
    </>
  );
}
