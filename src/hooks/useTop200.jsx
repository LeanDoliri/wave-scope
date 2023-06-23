import { useEffect, useState } from "react";
import { getTop200 } from "../services/apiTops";

export function useTop200() {
  const [loading, setLoading] = useState(false);

  const [top200, setTop200] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTop200().then((res) => {
      setTop200(res);
      setLoading(false);
    });
  },[]);

  return { loading, top200 };
}
