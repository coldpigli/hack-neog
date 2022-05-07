import styles from "./color_palette.module.css";
import { useState } from "react";
import { ColorBox } from "./ColorBox";

const ColorPalette = () => {
  const initialData = [
    { id: 1, color: "#6EA7B2", lock: false },
    { id: 2, color: "#A3C4BC", lock: false },
    { id: 3, color: "#BFD7B5", lock: false },
    { id: 4, color: "#E7EFC5", lock: false },
    { id: 5, color: "#F2DDA4", lock: false },
  ];
  const [palette, setPalette] = useState(initialData);

  function ColorCode() {
    let makingColorCode = "0123456789ABCDEF";
    let finalCode = "#";
    for (let counter = 0; counter < 6; counter++) {
      finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
  }
  function generatePalette() {
    let newPalette = [];
    newPalette = palette.map((paletteColor) =>
      paletteColor.lock === false
        ? { ...paletteColor, color: ColorCode() }
        : paletteColor
    );

    setPalette(newPalette);
  }

  return (
    <div>
      <button className={styles.btn} onClick={generatePalette}>
        Generate Palette
      </button>
      <div className={styles.palette_container}>
        {palette.map((paletteColor) => (
          <ColorBox
            key={paletteColor.id}
            paletteColor={paletteColor}
            setPalette={setPalette}
          />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default ColorPalette;
