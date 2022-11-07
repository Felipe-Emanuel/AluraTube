import styled from "styled-components";

export function Banner() {
  const StylesBanner = styled.div`
    img {
      width: 100%;
      height: 35vh;
      background-size: cover;
      background-position: center;
    }
  `;
  return (
    <StylesBanner>
      <img
        src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Banner"
      />
    </StylesBanner>
  );
}
