import { useEffect, useState } from "react";
import { getSongsTop200 } from "../services/apiTops";

export function useSongsTop200({ countryCode }) {
  const [loading, setLoading] = useState(false);
  const [songsTop200, setSongsTop200] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSongsTop200({ countryCode }).then((res) => {
      setSongsTop200(res);
      setLoading(false);
    });
  }, []);

  return { loading, songsTop200 };
}
