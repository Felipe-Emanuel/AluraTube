import styled from "styled-components";

const StylesFavorites = styled.div`
  width: calc(100vw - 8px * 4);
  display: grid;
  padding: 0 16px;
  grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(200px, 1fr);
  overflow-x: scroll;
  text-align: center;

  img {
    border-radius: 50%;
    width: 100px;
  }
`;

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
            <>
              <section>
                <a href={favUsers.url} target="_blank">
                  <img src={favUsers.profile} alt={favUsers.name} />
                </a>
                <p>{favUsers.name}</p>
              </section>
            </>
          );
        })}
      </StylesFavorites>
    </>
  );
}
