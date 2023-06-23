import { useTop200 } from "../../hooks/useTop200";

export function Top200() {
  const { loading, top200 } = useTop200();

  return (
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
  );
}
