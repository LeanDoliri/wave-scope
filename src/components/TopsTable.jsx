import { Card, Avatar, ListItem, List } from "@material-tailwind/react";

export default function TopsTable({ songsTop200 }) {
  const songsTop10 = songsTop200.slice(0, 10);
  return (
    <Card className="w-full bg-albescentWhite-50">
      <List className="overflow-hidden">
        {songsTop10.map((song) => {
          return (
            <ListItem
              key={song.trackMetadata.trackUri}
              className="p-0 hover:bg-buttercup-400"
            >
              <a href={song.trackMetadata.trackUri} target="_blank">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={song.trackMetadata.displayImageUri}
                    alt={song.trackMetadata.trackName}
                    size="lg"
                    variant="rounded"
                    className="object-contain p-1"
                  />
                  <p className="w-72 sm:w-full whitespace-nowrap">
                    <span className="block text-mineShaft-900 font-semibold truncate">
                      {song.trackMetadata.trackName}
                    </span>
                    <span className="block text-mineShaft-500 text-sm truncate">
                      {song.trackMetadata.artists
                        .map((artist) => artist.name)
                        .join(", ")}
                    </span>
                  </p>
                </div>
              </a>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
