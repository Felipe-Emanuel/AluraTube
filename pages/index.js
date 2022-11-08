import config from "../config.json";

import { CSSReset } from "../src/styles/CSSReset";
import { Menu } from "../src/components/Menu/Menu";
import { Banner } from "../src/components/Banner";
import { Favorites } from "../src/components/Favorites";
import { TimeLine } from "../src/components/TimeLine";
import { Header } from "../src/components/Header";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <CSSReset />
      <div>
        <Menu search={search} setSearch={setSearch} />
        <Banner />
        <Header />
        <TimeLine searchValue={search} playlists={config.playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
