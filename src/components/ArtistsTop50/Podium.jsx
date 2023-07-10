import { Card } from "@material-tailwind/react";
import { ArtistTop } from "./ArtistTop";

export function Podium({ artistsTop50 }) {
  return (
    <Card className="max-w-full sm:inline-flex flex-row sm:gap-3 justify-between items-baseline bg-albescentWhite-50 p-3">
      <ArtistTop artist={artistsTop50[1]} />
      <ArtistTop artist={artistsTop50[0]} isTop={true} />
      <ArtistTop artist={artistsTop50[2]} />
    </Card>
  );
}
