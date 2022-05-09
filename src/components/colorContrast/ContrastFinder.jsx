import { useColorContrast } from "contexts/colorContrastContext";
import { useEffect } from "react";
import styles from "./ContrastChecker.module.css";

export const ContrastFinder = () => {
  const {
    colorContrastState,
    contrastRatio,
    setContrastRatio,
    contrastRatioStatus,
    setContrastRatioStatus,
  } = useColorContrast();

  const {
    redText,
    greenText,
    blueText,
    textColor,
    redBackground,
    greenBackground,
    blueBackground,
    backgroundColor,
  } = colorContrastState;

  const luminance = (r, g, b) => {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const contrast = (rgb1, rgb2) => {
    var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  };

  const contrastStatusHandler = () => {
    if (contrastRatio < 3) {
      setContrastRatioStatus("Fail");
    } else if (contrastRatio >= 3 && contrastRatio < 4.5) {
      setContrastRatioStatus("AA Large");
    } else if (contrastRatio >= 4.5 && contrastRatio < 7) {
      setContrastRatioStatus("AA");
    } else if (contrastRatio >= 7) {
      setContrastRatioStatus("AAA");
    } else {
      setContrastRatioStatus("default");
    }
  };

  useEffect(() => {
    let rgb1 = [redText, greenText, blueText];
    let rgb2 = [redBackground, greenBackground, blueBackground];
    setContrastRatio(contrast(rgb1, rgb2).toFixed(2));
    contrastStatusHandler();
  }, [textColor, backgroundColor, contrastRatio]);

  return (
    <div className={styles.dummy_text}>
      <h1
        style={{
          color: colorContrastState.textColor,
        }}
      >
        Aa
      </h1>
      <span
        className={styles.sub_text}
        style={{
          color: colorContrastState.textColor,
        }}
      >
        {contrastRatio}
      </span>
      <span
        className={styles.subText}
        style={{
          color: colorContrastState.textColor,
        }}
      >
        {contrastRatioStatus}
      </span>
    </div>
  );
};
