import { useColorContrast } from "context/colorContrastContext";
import { useEffect } from "react";
import {
  GET_BLUE_COLOR_FOR_TEXT,
  GET_GREEN_COLOR_FOR_TEXT,
  GET_RED_COLOR_FOR_TEXT,
  GET_TEXT_COLOR,
} from "reducer/colorContrast/colorContrastconstants";

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
    <div className="text-setter">
      {/* <p>Your Color : {textColor}</p> */}
      <label>Text Color</label>
      <input
        value={redText}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_RED_COLOR_FOR_TEXT,
            payload: e.target.value,
          })
        }
      />
      <input
        value={greenText}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_GREEN_COLOR_FOR_TEXT,
            payload: e.target.value,
          })
        }
      />
      <input
        value={blueText}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_BLUE_COLOR_FOR_TEXT,
            payload: e.target.value,
          })
        }
      />
      <br />
      <label>R (RED)</label>
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

      <label>G (GREEN)</label>
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

      <label>B (BLUE)</label>
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
  );
};
