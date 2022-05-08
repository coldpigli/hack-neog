import React, { useState } from "react";
import styles from "./fontJoy.module.css";
import { fontArray } from "./fontArray";
import { AiTwotoneUnlock, AiTwotoneLock } from "react-icons/ai";

const Fontjoy = () => {
  const [fontOne, setFontOne] = useState("IBM Plex Sans");
  const [fontTwo, setFontTwo] = useState("IBM Plex Sans");
  const [fontThree, setFontThree] = useState("IBM Plex Sans");
  const [firstLock, setFirstLock] = useState(false);
  const [secondLock, setSecondLock] = useState(false);
  const [thirdLock, setThirdLock] = useState(false);

  function randomFontGenerator() {
    const firstFont = firstLock
      ? fontOne
      : fontArray[Math.floor(Math.random() * fontArray.length)];
    const secondFont = secondLock
      ? fontTwo
      : fontArray[Math.floor(Math.random() * fontArray.length)];
    const thirdFont = thirdLock
      ? fontThree
      : fontArray[Math.floor(Math.random() * fontArray.length)];
    setFontOne(firstFont);
    setFontTwo(secondFont);
    setFontThree(thirdFont);
  }
  return (
    <div className={styles.font_wrapper}>
      <div className={`${styles.font_container}`}>
        <div className={`${styles.row}`}>
          <span className={styles.font_parent}>{fontOne}&nbsp;</span>
          <h1
            className={`${styles.remove_outline} ${styles.textOne}`}
            style={{ fontFamily: fontOne }}
            contenteditable="true"
          >
            Color Blindness
          </h1>
          <span
            onClick={() => setFirstLock(!firstLock)}
            className={`${styles.action_btn} ${
              !firstLock ? styles.lockedIcon : styles.unlockedIcon
            }`}
          >
            {!firstLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
          </span>
        </div>

        <div className={`${styles.row}`}>
          <span className={styles.font_parent}>{fontTwo}&nbsp;</span>
          <h3
            className={`${styles.textTwo} ${styles.remove_outline}`}
            style={{ fontFamily: fontTwo }}
            contentEditable={true}
          >
            is more common than you think
          </h3>
          <span
            onClick={() => setSecondLock(!secondLock)}
            className={`${styles.action_btn} ${
              !firstLock ? styles.lockedIcon : styles.unlockedIcon
            }`}
          >
            {!secondLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
          </span>
        </div>

        <div className={`${styles.row}`}>
          <span className={styles.font_parent}>{fontThree}&nbsp;</span>
          <p
            className={`${styles.textThree} ${styles.remove_outline}`}
            style={{ fontFamily: fontThree }}
            contentEditable={true}
          >
            1 in 12 men is color blind while only 1 in 200 women have the
            condition. The condition is often inherited. Other causes include
            certain eye diseases and medication. More men than women are
            affected. Colour blindness usually involves the inability to
            distinguish between shades of red and green.
          </p>
          <span
            onClick={() => setThirdLock(!thirdLock)}
            className={`${styles.action_btn} ${
              !firstLock ? styles.lockedIcon : styles.unlockedIcon
            }`}
          >
            {!thirdLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
          </span>
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <button onClick={randomFontGenerator} className={`${styles.btn}`}>
          Generate
        </button>
      </div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default Fontjoy;
