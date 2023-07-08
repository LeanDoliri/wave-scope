import { Card, Avatar, ListItem, List } from "@material-tailwind/react";

export default function TopsTable({ songsTop200 }) {
  const songsTop10 = songsTop200.slice(0, 10)
  return (
    <Card className="w-full bg-albescentWhite-50">
      <List className="overflow-hidden">
      {songsTop10.map((song) => {
        return (
          <ListItem key={song.trackMetadata.trackUri} className="p-0 hover:bg-buttercup-400">
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
          </ListItem>
        );
      })}
      </List>
    </Card>
    // <Card className="">
    //   <CardBody className="overflow-scroll-none p-0">
    //     <table className="text-left">
    //       <thead>
    //         <tr>
    //           {TABLE_HEAD.map((head) => (
    //             <th
    //               key={head}
    //               className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
    //             >
    //               <Typography
    //                 variant="small"
    //                 color="blue-gray"
    //                 className="font-normal leading-none opacity-70"
    //               >
    //                 {head}
    //               </Typography>
    //             </th>
    //           ))}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {songsTop200.map((song) => {
    //           return (
    //             <tr key={song.trackMetadata.trackUri}>
    //               <td className="px-3 py-1 w-10">
    //                 <div className="flex items-center gap-3">
    //                   <Avatar
    //                     src={song.trackMetadata.displayImageUri}
    //                     alt={song.trackMetadata.trackName}
    //                     size="lg"
    //                     variant="rounded"
    //                     className="object-contain p-1"
    //                   />
    //                   <div className="w-100">
    //                     <Typography
    //                       className="text-mineShaft-900 whitespace-nowrap text-ellipsis overflow-hidden"
    //                     >
    //                       {song.trackMetadata.trackName}
    //                     </Typography>
    //                     <p className="text-mineShaft-500 overflow-hidden text-ellipsis whitespace-nowrap">
    //                       {song.trackMetadata.artists
    //                         .map((artist) => artist.name)
    //                         .join(", ")}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </CardBody>
    // </Card>
  );
}
