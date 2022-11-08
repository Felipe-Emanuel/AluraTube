import config from "../config.json";
import { Menu } from '../src/components/Menu'
import { CSSReset } from "../src/styles/CSSReset";
import { Banner } from "../src/components/Banner";
import { Favorites } from "../src/components/Favorites";
import { TimeLine } from "../src/components/TimeLine";
import { Header } from "../src/components/Header";

export function HomePage() {

  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Banner />
        <Header />
        <TimeLine playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;