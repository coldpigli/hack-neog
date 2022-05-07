import styles from "./Frames.module.css";

const Frames = ({height, width, source, title, icon}) => {
  return (
    <div className={styles.emulator}>
        <div className={styles.frameHeader}>
          <div className={styles.metaInfo}>
            <p>{width} X {height}</p>
          </div>
            <span className="material-icons md-24">
             {icon}
            </span>
          </div>
        <div className={styles.frameContainer} style={{width: width, height: height}}>
            <iframe id={styles.frame} src={source}
                title={title}> 
            </iframe>
        </div>
    </div>
  )
}   

export default Frames