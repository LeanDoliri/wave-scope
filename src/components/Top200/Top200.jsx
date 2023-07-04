import { useSongsTop200 } from "../../hooks/useSongsTop200";
import { Spinner } from "../Spinner/Spinner";

export function SongsTop200({ countryCode, countryName }) {
  const { loading, songsTop200 } = useSongsTop200({ countryCode });

  return (<div>
    <h1>{countryName}</h1>
    <ul>
      {loading ? (
        <Spinner />
      ) : (
        songsTop200.map((track) => (
          <li key={track.trackMetadata.trackUri}>
            {track.trackMetadata.trackName}
          </li>
        ))
      )}
    </ul>
    </div>
  );
}
