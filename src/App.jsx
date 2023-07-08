import { NewReleases } from "./components/NewRealeases/NewRealeases";
import { SongsTop200 } from "./components/Top200/Top200";
import { useLocation } from "./hooks/useLocation";
import { Navbar } from "./components/Navbar/Navbar";
import { Title } from "./components/Title/Title";
import { ArtistsTop50 } from "./components/ArtistsTop50/ArtistsTop50";

function App() {
  const { countryCode, countryName } = useLocation();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="mb-5 flex flex-col sm:items-center">
          <Title text={"Artist top 50"} />
          <ArtistsTop50 />
        </section>
        <section className="mb-5">
          <Title text={"Top 200 songs"} />
          <SongsTop200 countryCode={countryCode} countryName={countryName} />
        </section>
        <section className="mb-5">
          <Title text={"Popular new realeases"} />
          <NewReleases countryCode={countryCode} countryName={countryName} />
        </section>
      </main>
    </>
  );
}

export default App;
