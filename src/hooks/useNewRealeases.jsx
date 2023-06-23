import { useEffect, useState } from "react";
import { getNewRealeases } from "../services/apiNewRealeases";

export function useNewRealeases({ countryCode }) {
  const [loading, setLoading] = useState(false);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    setLoading(true);
    getNewRealeases({ countryCode }).then((res) => {
      setNewReleases(res);
      setLoading(false);
    })    
  }, [countryCode]);

  return { loading, newReleases };
}
