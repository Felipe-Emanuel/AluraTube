import { StylesBanner } from "../styles/StyledBanner";

import config from "../../config.json"

export function Banner() {
  return (
    <StylesBanner>
      <img
        src={config.bg}
        alt="Banner"
      />
    </StylesBanner>
  );
}
