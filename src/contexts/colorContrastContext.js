import { ColorContrastReducer } from "reducer/colorContrast/colorContrastReducer";

const { createContext, useContext, useReducer, useState } = require("react");

const ColorContrastContext = createContext();
const useColorContrast = () => useContext(ColorContrastContext);

const initialValue = {
  redText: 255,
  greenText: 255,
  blueText: 255,
  textColor: "rgb(167, 121, 12)",

  redBackground: 0,
  greenBackground: 75,
  blueBackground: 255,
  backgroundColor: "rgb(255, 255, 0)",
};

const ColorContrastProvider = ({ children }) => {
  const [contrastRatio, setContrastRatio] = useState("");
  const [contrastRatioStatus, setContrastRatioStatus] = useState("");
  const [colorContrastState, colorContrastDispatch] = useReducer(
    ColorContrastReducer,
    initialValue
  );
  return (
    <ColorContrastContext.Provider
      value={{
        colorContrastState,
        colorContrastDispatch,
        contrastRatio,
        setContrastRatio,
        contrastRatioStatus,
        setContrastRatioStatus,
      }}
    >
      {children}
    </ColorContrastContext.Provider>
  );
};

export { useColorContrast, ColorContrastProvider };
