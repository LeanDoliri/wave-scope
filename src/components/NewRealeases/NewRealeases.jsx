import { useNewRealeases } from "../../hooks/useNewRealeases";

export function NewReleases({ countryCode }) {
  const { loading, newReleases } = useNewRealeases({ countryCode });

  return (
    <ul>
      {loading ? (
        <li>Cargando...</li>
      ) : (
        newReleases.map((album) => (
          <li key={album.id}>
            <p>{album.name}</p>
            <p>{album.artists[0].name}</p>
            <img src={album.images[0].url} alt={album.name} />
          </li>
        ))
      )}
    </ul>
  );
}
