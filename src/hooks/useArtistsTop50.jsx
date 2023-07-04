import { useEffect, useState } from "react";
import { getArtistsTop50 } from "../services/apiTops";

export function useArtistsTop50() {
  const [loading, setLoading] = useState(false);
  const [artistsTop50, setArtistsTop50] = useState([]);

  useEffect(() => {
    setLoading(true);
    getArtistsTop50().then((res) => {
      setArtistsTop50(res);
      setLoading(false);
    });
  }, []);

  return { loading, artistsTop50 };
}
