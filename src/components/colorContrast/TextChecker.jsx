import { useColorContrast } from "contexts/colorContrastContext";
import { useEffect } from "react";
import {
  GET_BLUE_COLOR_FOR_TEXT,
  GET_GREEN_COLOR_FOR_TEXT,
  GET_RED_COLOR_FOR_TEXT,
  GET_TEXT_COLOR,
} from "reducer/colorContrast/colorContrastconstants";
import styles from "./ContrastChecker.module.css";

export const TextChecker = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();

  const { redText, greenText, blueText } = colorContrastState;

  useEffect(() => {
    let rgb = `rgb(${redText},${greenText},${blueText})`;
    colorContrastDispatch({
      type: GET_TEXT_COLOR,
      payload: rgb,
    });
  }, [redText, greenText, blueText]);

  return (
    <div className={styles.text_setter}>
      <label className="invert">Foreground</label>
      <div className={styles.range_container}>
        <label className="invert">R (RED)</label>
        <input
          value={redText}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_RED_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="red-color-range"
          value={redText}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_RED_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.range_container}>
        <label className="invert">G (GREEN)</label>
        <input
          value={greenText}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_GREEN_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="green-color-range"
          value={greenText}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_GREEN_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.range_container}>
        <label className="invert">B (BLUE)</label>
        <input
          value={blueText}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_BLUE_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="blue-color-range"
          value={blueText}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_BLUE_COLOR_FOR_TEXT,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
