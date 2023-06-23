import "./App.css";
import { NewReleases } from "./components/NewRealeases/NewRealeases";
import { Top200 } from "./components/Top200/Top200";

function App() {
  return (
    <>
      <h1>Wave Scope</h1>
      <h2>New Realeases</h2>
      <NewReleases />
      <hr />
      <h2>Top 200</h2>
      <Top200 />
    </>
  );
}

export default App;
