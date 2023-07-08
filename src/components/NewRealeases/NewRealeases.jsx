import { useNewRealeases } from "../../hooks/useNewRealeases";
import { Spinner } from "../Spinner/Spinner";
import AlbumCard from "./AlbumCard";

export function NewReleases({ countryCode }) {
  const { loading, newReleases } = useNewRealeases({ countryCode });

  return (
    <ul className="grid gap-3 md:grid-cols-4 lg:grid-cols-6 grid-cols-2">
      {loading ? (
        <Spinner />
      ) : (
        newReleases.slice(0, 12).map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))
      )}
    </ul>
  );
}
