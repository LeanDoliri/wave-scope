import { useArtistsTop50 } from "../../hooks/useArtistsTop50";
import { Spinner } from "../Spinner/Spinner";
import { Podium } from "./Podium";

export function ArtistsTop50() {
  const { loading, artistsTop50 } = useArtistsTop50();

  return loading ? (
    <Spinner />
  ) : (
    <Podium top={artistsTop50.slice(0, 3)}/>
  );
}
