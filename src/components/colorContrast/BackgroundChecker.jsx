import { useColorContrast } from "context/colorContrastContext";
import { useEffect, useState } from "react";
import {
  GET_BACKGROUND_COLOR,
  GET_BLUE_COLOR_FOR_BACKGROUND,
  GET_GREEN_COLOR_FOR_BACKGROUND,
  GET_RED_COLOR_FOR_BACKGROUND,
} from "reducer/colorContrast/colorContrastconstants";

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
    <div className="text-setter">
      {/* <p>Your Color : {backgroundColor}</p> */}
      <label>Text Color</label>
      <input
        value={redBackground}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_RED_COLOR_FOR_BACKGROUND,
            payload: e.target.value,
          })
        }
      />
      <input
        value={greenBackground}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_GREEN_COLOR_FOR_BACKGROUND,
            payload: e.target.value,
          })
        }
      />
      <input
        value={blueBackground}
        onChange={(e) =>
          colorContrastDispatch({
            type: GET_BLUE_COLOR_FOR_BACKGROUND,
            payload: e.target.value,
          })
        }
      />
      <br />


      <label>R (RED)</label>
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

      <label>G (GREEN)</label>
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

      <label>B (BLUE)</label>
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
  );
};
