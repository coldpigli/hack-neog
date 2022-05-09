import { useColorContrast } from "contexts/colorContrastContext";
import {
  GET_RED_COLOR_FOR_TEXT,
  GET_BLUE_COLOR_FOR_BACKGROUND,
  GET_RED_COLOR_FOR_BACKGROUND,
  GET_GREEN_COLOR_FOR_TEXT,
  GET_GREEN_COLOR_FOR_BACKGROUND,
  GET_BLUE_COLOR_FOR_TEXT,
} from "reducer/colorContrast/colorContrastconstants";
import styles from "./ContrastChecker.module.css";

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
    <div className={styles.btn_wrapper}>
      <button className={styles.btn} onClick={reverseHandler}>
        <span className="material-icons">repeat</span> Reverse
      </button>
      <button className={styles.btn} onClick={randomHandler}>
        <span className="material-icons">shuffle</span> Random
      </button>
    </div>
  );
};
