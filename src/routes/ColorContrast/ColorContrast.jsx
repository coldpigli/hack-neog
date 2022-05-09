import { TextChecker } from "../../components/colorContrast/TextChecker";
import { useColorContrast } from "contexts/colorContrastContext";
import style from "./ColorContrast.module.css";
import { simulate } from "@bjornlu/colorblind";
import { BackgroundChecker } from "../../components/colorContrast/BackgroundChecker";
import { ContrastFinder } from "../../components/colorContrast/ContrastFinder";
import { ReverseAndRandom } from "components/colorContrast/ReverseAndRandom";

export const ColorContrast = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();
  const {
    backgroundColor,
    blueBackground,
    blueText,
    greenBackground,
    greenText,
    redBackground,
    redText,
  } = colorContrastState;

  const protanopiaText = simulate(
    { r: redText, g: greenText, b: blueText },
    "protanopia"
  );
  const protanopiaBackground = simulate(
    { r: redBackground, g: greenBackground, b: blueBackground },
    "protanopia"
  );
  const deuteranopiaText = simulate(
    { r: redText, g: greenText, b: blueText },
    "deuteranopia"
  );
  const deuteranopiaBackground = simulate(
    { r: redBackground, g: greenBackground, b: blueBackground },
    "deuteranopia"
  );
  const tritanopiaText = simulate(
    { r: redText, g: greenText, b: blueText },
    "tritanopia"
  );
  const tritanopiaBackground = simulate(
    { r: redBackground, g: greenBackground, b: blueBackground },
    "tritanopia"
  );

  const concatToRgb = (colorObj) => {
    return "rgb(" + colorObj.r + "," + colorObj.g + "," + colorObj.b + ")";
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(120deg, ${backgroundColor},#0e0e0e)`,
      }}
      className={style.colorPage}
    >
      <div className={style.colorContrastContainer}>
        <ContrastFinder />
        <div className="color-setter-container">
          <TextChecker />
          <BackgroundChecker />
          <ReverseAndRandom />
        </div>
      </div>
      <div className={style.colorblind}>
        <h1 className={`${style.dummy_text} invert`}>Test your colors</h1>
        <h3 className={` invert`}>
          to see how colorblind people interpret your colors
        </h3>
        <div className={style.colorBlind_card}>
          <div
            style={{
              color: concatToRgb(protanopiaText),
              backgroundColor: concatToRgb(protanopiaBackground),
            }}
            className={style.colorWheel}
          >
            Aa
          </div>
          <div className={style.textSection}>
            <h3 className="invert">Protanopia (Blindness to Red)</h3>
            <p className="invert">
              People have trouble differentiating between Red Colors
            </p>
          </div>
        </div>
        <div className={style.colorBlind_card}>
          <div
            style={{
              color: concatToRgb(deuteranopiaText),
              backgroundColor: concatToRgb(deuteranopiaBackground),
            }}
            className={style.colorWheel}
          >
            Aa
          </div>
          <div className={style.textSection}>
            <h3 className="invert">Deuteranopia (Blindness to Green)</h3>
            <p className="invert">
              People have trouble differentiating between Red-Green
            </p>
          </div>
        </div>
        <div className={style.colorBlind_card}>
          <div
            style={{
              color: concatToRgb(tritanopiaText),
              backgroundColor: concatToRgb(tritanopiaBackground),
            }}
            className={style.colorWheel}
          >
            Aa
          </div>
          <div className={style.textSection}>
            <h3 className="invert">Tritanopia (Blindness to Blue)</h3>
            <p className="invert">
              People have trouble differentiating between Blue-Yellow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
