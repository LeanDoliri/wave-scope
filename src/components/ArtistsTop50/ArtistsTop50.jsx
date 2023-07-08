import { useArtistsTop50 } from "../../hooks/useArtistsTop50";
import { Spinner } from "../Spinner/Spinner";
import { Podium } from "./Podium";

export function ArtistsTop50() {
  const { loading, artistsTop50 } = useArtistsTop50();

  return (
    <div>
      {loading ? <Spinner /> : <Podium artistsTop50={artistsTop50} />}
    </div>
  );
}
