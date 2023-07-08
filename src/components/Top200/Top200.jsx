import { useSongsTop200 } from "../../hooks/useSongsTop200";
import { Spinner } from "../Spinner/Spinner";
import TopsTable from "../TopsTable";

export function SongsTop200({ countryCode, countryName }) {
  const { loading, songsTop200 } = useSongsTop200({ countryCode });

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <TopsTable songsTop200={songsTop200}/>
      )}
    </div>
  );
}
