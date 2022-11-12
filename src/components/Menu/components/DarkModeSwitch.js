import { useContext } from "react";
import { StyledSwitch } from "../../../styles/StyledSwitch";
import { ColorModeContext } from "./ColorMode";

export default function DarkModeSwitch() {
  const context = useContext(ColorModeContext);

  return (
    <StyledSwitch>
      <input id="darkmode" type="checkbox" onChange={context.handleSwitch} />

      <label htmlFor="darkmode" className="darkmode-switch">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  );
}
