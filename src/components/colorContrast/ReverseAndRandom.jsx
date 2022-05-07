import { useColorContrast } from "context/colorContrastContext";
import {
  GET_RED_COLOR_FOR_TEXT,
  GET_BLUE_COLOR_FOR_BACKGROUND,
  GET_RED_COLOR_FOR_BACKGROUND,
  GET_GREEN_COLOR_FOR_TEXT,
  GET_GREEN_COLOR_FOR_BACKGROUND,
  GET_BLUE_COLOR_FOR_TEXT,
} from "reducer/colorContrast/colorContrastconstants";

export const ReverseAndRandom = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();

  const {
    blueText,
    greenText,
    redText,
    redBackground,
    greenBackground,
    blueBackground,
  } = colorContrastState;

  const reverseHandler = () => {
    colorContrastDispatch({
      type: GET_RED_COLOR_FOR_TEXT,
      payload: redBackground,
    });

    colorContrastDispatch({
      type: GET_RED_COLOR_FOR_BACKGROUND,
      payload: redText,
    });

    colorContrastDispatch({
      type: GET_GREEN_COLOR_FOR_TEXT,
      payload: greenBackground,
    });

    colorContrastDispatch({
      type: GET_GREEN_COLOR_FOR_BACKGROUND,
      payload: greenText,
    });

    colorContrastDispatch({
      type: GET_BLUE_COLOR_FOR_TEXT,
      payload: blueBackground,
    });

    colorContrastDispatch({
      type: GET_BLUE_COLOR_FOR_BACKGROUND,
      payload: blueText,
    });
  };

  const randomHandler = () => {
    colorContrastDispatch({
      type: GET_RED_COLOR_FOR_TEXT,
      payload: Math.round(Math.random() * 256),
    });

    colorContrastDispatch({
      type: GET_RED_COLOR_FOR_BACKGROUND,
      payload: Math.round(Math.random() * 256),
    });

    colorContrastDispatch({
      type: GET_GREEN_COLOR_FOR_TEXT,
      payload: Math.round(Math.random() * 256),
    });

    colorContrastDispatch({
      type: GET_GREEN_COLOR_FOR_BACKGROUND,
      payload: Math.round(Math.random() * 256),
    });

    colorContrastDispatch({
      type: GET_BLUE_COLOR_FOR_TEXT,
      payload: Math.round(Math.random() * 256),
    });

    colorContrastDispatch({
      type: GET_BLUE_COLOR_FOR_BACKGROUND,
      payload: Math.round(Math.random() * 256),
    });
  };

  return (
  <div>
    <button onClick={reverseHandler}>Reverse</button>
    <button onClick={randomHandler}>Random</button>
  </div>
)};
