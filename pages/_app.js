import { CSSReset } from "../src/styles/CSSReset";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/styles/Theme";
import {
  ColorModeContext,
  ColorModeProvider,
} from "../src/components/Menu/components/ColorMode";
import { useContext } from "react";
import { RegisterVideo } from "../src/components/Menu/components/RegisterVideo";

const ProviderWrappert = ({ children }) => {
  return (
    <ColorModeProvider initialMode={"darkMode"}>{children}</ColorModeProvider>
  );
};

function MyApp({ Component, pageProps }) {
  const context = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={Theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrappert>
      <MyApp {...props} />
    </ProviderWrappert>
  );
}
