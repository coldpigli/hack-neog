import { useState } from "react";
import styles from "./color_palette.module.css";
import { AiTwotoneLock } from "react-icons/ai";
import { AiTwotoneUnlock } from "react-icons/ai";
export function ColorBox({ paletteColor, setPalette }) {
  const { id, color, lock } = paletteColor;
  const [copySuccess, setCopySuccess] = useState("");
  function copyToClipboard(color) {
    navigator.clipboard.writeText(color);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 800);
  }
  function toggleLock(id) {
    setPalette((prevPalette) =>
      prevPalette.map((eachColor) =>
        eachColor.id === id
          ? { ...eachColor, lock: !eachColor.lock }
          : eachColor
      )
    );
  }
  return (
    <div className={styles.color_box} style={{ backgroundColor: color }}>
      <span onClick={() => toggleLock(id)}>
        {lock ? <AiTwotoneLock /> : <AiTwotoneUnlock />}
      </span>
      <span onClick={() => copyToClipboard(color)}>{color}</span>
      <span className={styles.copy_text}>{copySuccess}</span>
    </div>
  );
}
