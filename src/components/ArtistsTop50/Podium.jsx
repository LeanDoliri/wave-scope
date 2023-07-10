import { Button, Card } from "@material-tailwind/react";
import { ArtistTop } from "./ArtistTop";

export function Podium({ artistsTop50 }) {
  return (
    <Card className=" bg-albescentWhite-50 p-3">
      <div className="max-w-full flex flex-row sm:inline-flex sm:gap-3 justify-between items-baseline mb-3">
        <ArtistTop artist={artistsTop50[1]} />
        <ArtistTop artist={artistsTop50[0]} isTop={true} />
        <ArtistTop artist={artistsTop50[2]} />
      </div>
      <Button color="amber" className="bg-buttercup-400 shadow-none text-white">
        Ver más
      </Button>
    </Card>
  );
}
