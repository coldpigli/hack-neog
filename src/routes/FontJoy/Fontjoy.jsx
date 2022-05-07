import React, { useState } from "react";
import styles from "./fontJoy.module.css";
import { fontArray } from "./fontArray";
import { AiTwotoneUnlock, AiTwotoneLock } from "react-icons/ai";

const Fontjoy = () => {
  const [fontOne, setFontOne] = useState("Montserrat");
  const [fontTwo, setFontTwo] = useState("Lora");
  const [fontThree, setFontThree] = useState("Oswald");
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
    <>
      <div className={`${styles.container}`}>
        <button onClick={randomFontGenerator} className={`${styles.btn}`}>
          Generate
        </button>

        <div className={`${styles.row}`}>
          <span>
            {fontOne}&nbsp;
            <span onClick={() => setFirstLock(!firstLock)}>
              {!firstLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
            </span>
          </span>
          <h1
            className={styles.remove_outline}
            style={{ fontFamily: fontOne }}
            contenteditable="true"
          >
            Very good way
          </h1>
        </div>
        <div className={`${styles.row}`}>
          <span>
            {fontTwo}&nbsp;
            <span onClick={() => setSecondLock(!secondLock)}>
              {!secondLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
            </span>
          </span>
          <h3
            className={styles.remove_outline}
            style={{ fontFamily: fontTwo }}
            contentEditable={true}
          >
            Second heading whidcb is the only
          </h3>
        </div>

        <div className={`${styles.row}`}>
          <span>
            {fontThree}&nbsp;
            <span onClick={() => setThirdLock(!thirdLock)}>
              {!thirdLock ? <AiTwotoneUnlock /> : <AiTwotoneLock />}
            </span>
          </span>
          <p
            className={styles.remove_outline}
            style={{ fontFamily: fontThree }}
            contenteditable={true}
          >
            This is third paragraph
          </p>
        </div>
      </div>
    </>
  );
};

export default Fontjoy;
