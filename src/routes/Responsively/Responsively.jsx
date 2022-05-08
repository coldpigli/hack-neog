import { AddressBar, Frames } from 'components';
import FrameListing from 'components/FrameListing/FrameListing';
import { useAddress } from 'contexts';
import { useEffect } from 'react';
import styles from "./Responsively.module.css";

const Responsively = () => {

  const {address} = useAddress();

  return (
    <div className={styles.responsivelyPage}>
        <AddressBar/>
        <FrameListing/>
        {/* <Frames height="896" width="414" source={address} title="hello"/>
        <Frames height="428" width="926" source={address} title="hello"/> */}
    </div>
  )
}

export default Responsively;