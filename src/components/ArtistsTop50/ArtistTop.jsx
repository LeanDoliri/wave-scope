import { Avatar } from "@material-tailwind/react";

export function ArtistTop({ artist, isTop }) {
  return (
    <a
      href={artist?.data.uri}
      target="_blank"
      className="flex flex-col items-center hover:bg-buttercup-400/75 rounded p-1"
    >
      <Avatar
        src={artist?.data.visuals.avatarImage.sources[0].url}
        alt={artist?.artist}
        size={isTop ? "xxl" : "xl"}
        withBorder={true}
        color="amber"
        className="p-0.5"
      />
      <h5 className="mb-1 text-xl font-medium text-mineShaft-900">
        {artist?.artist}
      </h5>
      <span className="text-sm text-mineShaft-900">Rank: {artist?.rank}</span>
      <span className="text-sm text-mineShaft-900">
        Listeners: {artist?.monthlyListeners}
      </span>
    </a>
  );
}
