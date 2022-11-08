import { StyledTimeline } from "../styles/StyledTimeline";

export function TimeLine({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={Math.random()}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueTitleNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueTitleNormalized);
                })
                .map((video) => {
                  return (
                    <a key={Math.random()} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
