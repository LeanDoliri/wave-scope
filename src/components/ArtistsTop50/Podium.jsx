import { Avatar, Card } from "@material-tailwind/react";

export function Podium({ artistsTop50 }) {
  const top = artistsTop50.slice(0, 3);
  return (
    <Card className="max-w-full sm:inline-flex flex-row sm:gap-3 justify-between items-baseline bg-albescentWhite-50 p-3">
      <div className="flex flex-col items-center hover:bg-buttercup-400/75 rounded p-1">
        <Avatar
          src={top[1].data.visuals.avatarImage.sources[0].url}
          alt={top[1].artist}
          size="xl"
          withBorder={true}
          color="amber"
          className="p-0.5"
        />
        <h5 className="mb-1 text-xl font-medium text-mineShaft-900">
          {top[1].artist}
        </h5>
        <span className="text-sm text-mineShaft-900">Rank: {top[1].rank}</span>
        <span className="text-sm text-mineShaft-900">Listeners: {top[1].monthlyListeners}</span>
      </div>
      <div className="flex flex-col items-center hover:bg-buttercup-400/75 rounded p-1">
        <Avatar
          src={top[0].data.visuals.avatarImage.sources[0].url}
          alt={top[0].artist}
          size="xxl"
          withBorder={true}
          color="amber"
          className="p-0.5"
        />
        <h5 className="mb-1 text-xl font-medium text-mineShaft-900">
          {top[0].artist}
        </h5>
        <span className="text-sm text-mineShaft-900">Rank: {top[0].rank}</span>
        <span className="text-sm text-mineShaft-900">Listeners: {top[0].monthlyListeners}</span>
      </div>
      <div className="flex flex-col items-center hover:bg-buttercup-400/75 rounded p-1">
        <Avatar
          src={top[2].data.visuals.avatarImage.sources[0].url}
          alt={top[2].artist}
          size="xl"
          withBorder={true}
          color="amber"
          className="p-0.5"
        />
        <h5 className="mb-1 text-xl font-medium text-mineShaft-900">
          {top[2].artist}
        </h5>
        <span className="text-sm text-mineShaft-900">Rank: {top[2].rank}</span>
        <span className="text-sm text-mineShaft-900">Listeners: {top[2].monthlyListeners}</span>
      </div>
    </Card>
  );
}
