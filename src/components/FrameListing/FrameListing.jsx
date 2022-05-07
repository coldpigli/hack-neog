import { Frames } from 'components';
import { useAddress, useDevice } from 'contexts';
import styles from "./FrameListing.module.css";

const FrameListing = () => {

    const {deviceState} = useDevice();
    const {address} = useAddress();
   
    // height, width, source, title
  return (
    <div className={styles.frameListing}>
       {
           deviceState.map((device)=>{
               return <Frames height={Number(device.height)} width={Number(device.width)} title={device.deviceName} source={address} icon={device.icon}/>
           })
       }
    </div>
  )
}

export default FrameListing