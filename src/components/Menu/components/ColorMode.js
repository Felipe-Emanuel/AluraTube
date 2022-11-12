import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Configure o context em components/Menu/components/ColorMode.js");
  },
  handleSwitch: () => {
    alert("Configure o context em components/Menu/components/ColorMode.js");
  },
});

export const ColorModeProvider = ({ children, initialMode }) => {
  const [mode, setMode] = useState(initialMode);

  const handleSwitch = () => {
    {
      mode === "darkMode"
        ? setMode("lightMode")
        : setMode("darkMode");
    }
  };

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, handleSwitch: handleSwitch }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
