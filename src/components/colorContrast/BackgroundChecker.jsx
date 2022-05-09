import { useColorContrast } from "contexts/colorContrastContext";
import { useEffect, useState } from "react";
import {
  GET_BACKGROUND_COLOR,
  GET_BLUE_COLOR_FOR_BACKGROUND,
  GET_GREEN_COLOR_FOR_BACKGROUND,
  GET_RED_COLOR_FOR_BACKGROUND,
} from "reducer/colorContrast";
import styles from "./ContrastChecker.module.css";

export const BackgroundChecker = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();

  const { redBackground, greenBackground, blueBackground, backgroundColor } =
    colorContrastState;

  useEffect(() => {
    let rgb = `rgb(${redBackground},${greenBackground},${blueBackground})`;
    colorContrastDispatch({
      type: GET_BACKGROUND_COLOR,
      payload: rgb,
    });
  }, [redBackground, greenBackground, blueBackground]);

  return (
    <div className={styles.text_setter}>
      <label className="invert">Background</label>
      <div className={styles.range_container}>
        <label className="invert">R (RED)</label>
        <input
          value={redBackground}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_RED_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="red-color-range"
          value={redBackground}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_RED_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.range_container}>
        <label className="invert">G (GREEN)</label>
        <input
          value={greenBackground}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_GREEN_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="green-color-range"
          value={greenBackground}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_GREEN_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.range_container}>
        <label className="invert">B (BLUE)</label>
        <input
          value={blueBackground}
          className={styles.input}
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_BLUE_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
        <input
          type="range"
          id="blue-color-range"
          value={blueBackground}
          min="0"
          max="255"
          onChange={(e) =>
            colorContrastDispatch({
              type: GET_BLUE_COLOR_FOR_BACKGROUND,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
