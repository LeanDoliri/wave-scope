import { useEffect, useState } from "react";
import { getNewRealeases } from "../services/apiNewRealeases";

export function useNewRealeases() {
  const [loading, setLoading] = useState(false);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    setLoading(true);
    getNewRealeases({ country: "ar" }).then((res) => {
      setNewReleases(res);
      setLoading(false);
    });
  },[]);

  return {loading, newReleases};
}
