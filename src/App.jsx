import { NewReleases } from "./components/NewRealeases/NewRealeases";
import { Top200 } from "./components/Top200/Top200";
import { useLocation } from "./hooks/useLocation";
import { WaveScopeIso } from "./assets/wave-scope-icons";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const { countryCode, countryName } = useLocation();

  return (
    <div className="bg-cream">
      <Navbar />
      <header className="flex items-center p-2">
        <h1 className="font-title text-6xl text-left p-3">WAVE<br/>SCOPE</h1>
      </header>
      <main>
        <section>
          <h2>New Realeases</h2>
          <NewReleases countryCode={countryCode} countryName={countryName} />
          <hr />
        </section>
        <section>
          <h2>Top 200</h2>
          <Top200 countryCode={countryCode} countryName={countryName} />
        </section>
      </main>
    </div>
  );
}

export default App;
