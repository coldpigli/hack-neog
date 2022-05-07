import { createRef } from "react";
import { createFileName, useScreenshot } from "use-react-screenshot";
import styles from "./Frames.module.css";

const Frames = ({height, width, source, title, icon}) => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div className={styles.emulator}>
        <div className={styles.frameHeader}>
          <div className={styles.metaInfo}>
            <p>{width} X {height}</p>
          </div>
            <span className="material-icons md-24">
             {icon}
            </span>
            <div className={styles.screenshot} onClick={downloadScreenshot}>
            <span className="material-icons md-24">
              photo_camera
            </span>
            </div>
          </div>
        <div className={styles.frameContainer} style={{width: width, height: height}}  ref={ref}>
            <iframe id={styles.frame} src={source}
                title={title}> 
            </iframe>
        </div>
    </div>
  )
}   

export default Frames