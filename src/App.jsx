import { useEffect, useState } from "react";
import "./App.css";
import { NewReleases } from "./components/NewRealeases/NewRealeases";
import { Top200 } from "./components/Top200/Top200";
import { useLocation } from "./hooks/useLocation";

function App() {
  const { countryCode, countryName } = useLocation();

  return (
    <>
      <h1>Wave Scope</h1>
      <h2>New Realeases</h2>
      <NewReleases countryCode={countryCode} countryName={countryName}/>
      <hr />
      <h2>Top 200</h2>
      <Top200 countryCode={countryCode} countryName={countryName}/>
    </>
  );
}

export default App;
