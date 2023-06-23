import { useNewRealeases } from "../../hooks/useNewRealeases";

export function NewReleases() {
  const { loading, newReleases } = useNewRealeases();

  return (
    <ul>
      {loading ? (
        <li>Cargando...</li>
      ) : (
        newReleases.map((album) => (
          <li key={album.id}>
            <p>{album.name}</p>
            <p>{album.artists[0].name}</p>
            <img src={album.images[2].url} alt={album.name} />
          </li>
        ))
      )}
    </ul>
  );
}
