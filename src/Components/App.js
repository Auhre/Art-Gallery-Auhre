import Nav from "./Nav";
import TopDisplay from "./TopDisplay";
import ExploreSection from "./ExploreSection";
import TopArtSection from "./TopArtSection";
import TopArtistSection from './TopArtistSection';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <TopDisplay />
      <ExploreSection />
      <TopArtSection />
      <TopArtistSection />
      <Outlet />
    </>
  );
}

export default App;
