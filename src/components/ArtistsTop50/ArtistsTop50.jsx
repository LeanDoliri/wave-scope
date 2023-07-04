import { useArtistsTop50 } from "../../hooks/useArtistsTop50";

export function ArtistsTop50() {
  const { loading, artistsTop50 } = useArtistsTop50();

  return (
    <ul>
      {loading ? (
        <li>Cargando...</li>
      ) : (
        artistsTop50.map((artist) => (
          <li key={artist.data.uri}>
            <p>Rank: {artist.rank}</p>
            <p>{artist.artist}</p>
          </li>
        ))
        )}
    </ul>
  );
}
