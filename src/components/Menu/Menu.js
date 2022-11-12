import { Logo } from "../../styles/SVG/Logo";
import { StyledMenu } from "../../styles/StyledMenu";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch";

export function Menu({ search, setSearch }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search search={search} setSearch={setSearch} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}
