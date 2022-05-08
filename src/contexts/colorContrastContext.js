import { ColorContrastReducer } from "reducer/colorContrast/colorContrastReducer";

const { createContext, useContext, useReducer } = require("react");

const ColorContrastContext = createContext();
const useColorContrast = () => useContext(ColorContrastContext);

const initialValue = {
  redText: 24,
  greenText: 144,
  blueText: 255,
  textColor: "rgb(167, 121, 12)",

  redBackground: 255,
  greenBackground: 255,
  blueBackground: 255,
  backgroundColor: "rgb(255, 255, 0)",
};

const ColorContrastProvider = ({ children }) => {
  const [colorContrastState, colorContrastDispatch] = useReducer(
    ColorContrastReducer,
    initialValue
  );
  return (
    <ColorContrastContext.Provider
      value={{ colorContrastState, colorContrastDispatch }}
    >
      {children}
    </ColorContrastContext.Provider>
  );
};

export { useColorContrast, ColorContrastProvider };
