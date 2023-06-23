import { useEffect, useState } from "react";
import { getLocation } from "../services/apiLocation";

export function useLocation() {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    setLoading(true);
    
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getLocation({ latitude, longitude }).then((data) => {
        setCountryCode(data.countryCode);
        setCountryName(data.countryName);
      });

      setLoading(false);
    }

    function error() {
      setCountryCode("GLOBAL");
      setCountryName("GLOBAL");

      setLoading(false);
    }
  }, []);

  return { loading, countryCode, countryName };
}
