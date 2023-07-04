import { NewReleases } from "./components/NewRealeases/NewRealeases";
import { SongsTop200 } from "./components/Top200/Top200";
import { useLocation } from "./hooks/useLocation";
import { Navbar } from "./components/Navbar/Navbar";
import { ArtistsTop50 } from "./components/ArtistsTop50/ArtistsTop50";


function App() {
  const { countryCode, countryName } = useLocation();

  return (
    <div className="bg-albescentWhite-100">
      <Navbar />
      <main>
        <section>
          <h2>Artists Top 50</h2>
          <ArtistsTop50 />
        </section>
        <section>
          <h2>Songs Top 200</h2>
          <SongsTop200 countryCode={countryCode} countryName={countryName} />
        </section>
        <section>
          <h2>New Realeases</h2>
          <NewReleases countryCode={countryCode} countryName={countryName} />
          <hr />
        </section>
      </main>
    </div>
  );
}

export default App;
