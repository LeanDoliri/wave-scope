import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function AlbumCard({ album }) {
  const artists = album.artists.map((data) => data.name);
  return (
    <Card className="mt-6 mb-3 bg-albescentWhite-50 hover:bg-buttercup-400/75 hover:cursor-pointer ease-in-out duration-150">
      <a href={album.external_urls.spotify} target="_blank">
        <CardHeader className="relative">
          <img src={album.images[0].url} alt={album.name} layout="fill" />
        </CardHeader>
        <CardBody className="px-6 py-3">
          <Typography
            variant="h5"
            className="text-mineShaft-900 truncate text-base"
          >
            {album.name}
          </Typography>
          <Typography className="text-mineShaft-500 truncate text-sm">
            {artists.join(", ")}
          </Typography>
        </CardBody>
      </a>
    </Card>
  );
}
