import { StyledTimeline } from "../styles/StyledTimeline";

export function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={Math.random()}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <div key={Math.random()}>
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
