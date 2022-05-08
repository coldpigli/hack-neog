import { useDevice } from "contexts";
import { createRef } from "react";
import { createFileName, useScreenshot } from "use-react-screenshot";
import styles from "./Frames.module.css";

const Frames = ({ height, width, source, title, icon, landscape, id }) => {
  const ref = createRef(null);
  const { dispatchDevice } = useDevice();
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const rotateDevice = () =>
    dispatchDevice({ type: "ROTATE_DEVICE", payload: id });

  return (
    <div className={styles.emulator}>
      <div className={styles.frameHeader}>
        <div className={styles.metaInfo}>
          <p>
            {width} x {height}
          </p>
        </div>
        <span
          className={`${styles.rotate} ${styles.action_btn} material-icons md-24`}
        >
          {icon}
        </span>
        <div
          className={`${styles.screenshot} ${styles.action_btn}`}
          onClick={downloadScreenshot}
        >
          <span className="material-icons md-24">photo_camera</span>
        </div>
        {id !== 3 ? (
          <div
            className={`${styles.rotate} ${styles.action_btn}`}
            onClick={rotateDevice}
          >
            <span className="material-icons md-24">screen_rotation_alt</span>
          </div>
        ) : null}
      </div>
      <div
        className={styles.frameContainer}
        style={
          landscape
            ? { width: height, height: width }
            : { width: width, height: height }
        }
        ref={ref}
      >
        <iframe id={styles.frame} src={source} title={title}></iframe>
      </div>
    </div>
  );
};

export default Frames;
