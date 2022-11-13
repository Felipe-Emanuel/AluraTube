import config from "../config.json";

import { Menu } from "../src/components/Menu/Menu";
import { Banner } from "../src/components/Banner";
import { Favorites } from "../src/components/Favorites";
import { TimeLine } from "../src/components/TimeLine";
import { Header } from "../src/components/Header";
import { useEffect, useState } from "react";
import { videoService } from "../src/services/videoService";

function HomePage() {
  const service = videoService();
  const [search, setSearch] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    service.getAllVideos().then((data) => {
      const newPLaylists = { ...playlists };
      data.data.forEach((video) => {
        if (!newPLaylists[video.playlist]) {
          newPLaylists[video.playlist] = [];
        }
        newPLaylists[video.playlist].push(video);
      });
      setPlaylists(newPLaylists);
    });
  }, []);

  return (
    <>
      <div>
        <Menu search={search} setSearch={setSearch} />
        <Banner />
        <Header />
        <TimeLine searchValue={search} playlists={playlists} />
        {/* <Favorites favorites={config.favorites} /> */}
      </div>
    </>
  );
}

export default HomePage;
