import { Button } from "@material-tailwind/react";
import { useNewRealeases } from "../../hooks/useNewRealeases";
import { Spinner } from "../Spinner/Spinner";
import AlbumCard from "./AlbumCard";

export function NewReleases({ countryCode }) {
  const { loading, newReleases } = useNewRealeases({ countryCode });

  return loading ? (
    <Spinner />
  ) : (
    <div className="flex flex-col justify-center">
      <ul className="grid gap-3 md:grid-cols-4 lg:grid-cols-6 grid-cols-2 mb-3">
        {newReleases.slice(0, 12).map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </ul>
      <Button color="amber" className="bg-buttercup-400 shadow-none text-white">
        Ver más
      </Button>
    </div>
  );
}
