import { TextChecker } from "../../components/colorContrast/TextChecker";
import { useColorContrast } from "contexts/colorContrastContext";
import style from "./ColorContrast.module.css";
import { simulate } from '@bjornlu/colorblind'
import { BackgroundChecker } from "../../components/colorContrast/BackgroundChecker";
import { ContrastFinder } from "../../components/colorContrast/ContrastFinder";
import { ReverseAndRandom } from "components/colorContrast/ReverseAndRandom";

export const ColorContrast = () => {
  const { colorContrastState, colorContrastDispatch } = useColorContrast();
  const {backgroundColor, 
    blueBackground, 
    blueText, 
    greenBackground, 
    greenText, 
    redBackground, 
    redText} = colorContrastState;

    const protanopiaText = simulate({r: redText, g: greenText, b: blueText}, 'protanopia')
    const protanopiaBackground = simulate({r: redBackground, g: greenBackground, b: blueBackground}, 'protanopia')
    const deuteranopiaText = simulate({r: redText, g: greenText, b: blueText}, 'deuteranopia')
    const deuteranopiaBackground = simulate({r: redBackground, g: greenBackground, b: blueBackground},'deuteranopia')
    const tritanopiaText = simulate({r: redText, g: greenText, b: blueText}, 'tritanopia')
    const tritanopiaBackground = simulate({r: redBackground, g: greenBackground, b: blueBackground}, 'tritanopia')

  const concatToRgb = (colorObj) => {
    return ('rgb('+colorObj.r+','+colorObj.g+","+colorObj.b+")");
  }

  return (
    <div className={style.colorPage}>
      <div
        className={style.colorContrastContainer}
      >
        <div className={style.demoText}>
          <h2 style={{ color: colorContrastState.textColor, backgroundColor: colorContrastState.backgroundColor }}>HackneoG</h2>
        </div>

        <div className="color-setter-container">
          <TextChecker />
          <BackgroundChecker />
          <ContrastFinder />
          <ReverseAndRandom />
        </div>
      </div>
      <div className={style.colorblind}>
      <div>
        <h3>Protanopia (Blindness to Red)</h3>
        <p>Unable to perceive any 'red' light</p>
        <div className={style.demoText}>
            <h2 style={{ color: concatToRgb(protanopiaText), backgroundColor: concatToRgb(protanopiaBackground)}}>HackneoG</h2>
        </div>
      </div>
      <div>
        <h3>deuteranopia (Blindness to Green)</h3>
        <p>People have trouble differentiating between Red-Green</p>
        <div className={style.demoText}>
            <h2 style={{ color: concatToRgb(deuteranopiaText), backgroundColor: concatToRgb(deuteranopiaBackground)}}>HackneoG</h2>
        </div>
      </div>
      <div>
        <h3>tritanopia (Blindness to Blue)</h3>
        <p>People have trouble differentiating between Blue-Yellow</p>
        <div className={style.demoText}>
            <h2 style={{ color: concatToRgb(tritanopiaText), backgroundColor: concatToRgb(tritanopiaBackground)}}>HackneoG</h2>
        </div>
      </div>
      </div>
    </div>
  );
};
