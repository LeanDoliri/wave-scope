export function Podium({ top }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={top[0].data.visuals.avatarImage.sources[0].url}
        alt={top[0].artist}
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900">
        {top[0].artist}
      </h5>
      <span className="text-sm text-gray-500">Rank: {top[0].rank}</span>
      <span className="text-sm text-gray-500">{top[0].monthlyListeners}</span>
    </div>
  );

  //   return top.map((artist) => (
  //     <div key={artist.data.uri} className="bg-albescentWhite-50 rounded-lg m-10 p-3">
  //       <div className="flex flex-col items-center">
  //         <img
  //           className="w-24 h-24 mb-3 rounded-full shadow-lg"
  //           src={artist.data.visuals.avatarImage.sources[0].url}
  //           alt={artist.artist}
  //         />
  //         <h5 className="mb-1 text-xl font-medium text-gray-900">
  //           {artist.artist}
  //         </h5>
  //         <span className="text-sm text-gray-500">
  //           Rank: {artist.rank}
  //         </span>
  //         <span className="text-sm text-gray-500">
  //           {artist.monthlyListeners}
  //         </span>
  //       </div>
  //     </div>
  //   ));
}
