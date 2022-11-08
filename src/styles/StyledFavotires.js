import styled from "styled-components";

export const StylesFavorites = styled.div`
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
