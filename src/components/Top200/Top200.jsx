import { useTop200 } from "../../hooks/useTop200";

export function Top200({ countryCode, countryName }) {
  const { loading, top200 } = useTop200({ countryCode });

  return (<div>
    <h1>{countryName}</h1>
    <ul>
      {loading ? (
        <li>Cargando...</li>
      ) : (
        top200.map((track) => (
          <li key={track.trackMetadata.trackUri}>
            {track.trackMetadata.trackName}
          </li>
        ))
      )}
    </ul>
    </div>
  );
}
