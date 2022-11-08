import { StylesFavorites } from "../styles/StyledFavotires";

export function Favorites(props) {
  const favoritesNames = Object.keys(props.favorites);

  return (
    <>
      <h2
        style={{
          width: "100%",
          margin: "0 32px",
          fontSize: "16px",
          marginBottom: "16px",
          textTransform: "capitalize",
        }}
      >
        Favoritos
      </h2>
      <StylesFavorites>
        {favoritesNames.map((favorites) => {
          const favUsers = props.favorites[favorites];
          return (
            <section key={Math.random()}>
              <a href={favUsers.url} target="_blank">
                <img src={favUsers.profile} alt={favUsers.name} />
              </a>
              <p>{favUsers.name}</p>
            </section>
          );
        })}
      </StylesFavorites>
    </>
  );
}
